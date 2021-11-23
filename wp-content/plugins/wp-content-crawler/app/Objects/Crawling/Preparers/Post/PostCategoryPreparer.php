<?php
/**
 * Created by PhpStorm.
 * User: turgutsaricam
 * Date: 09/12/2018
 * Time: 06:48
 *
 * @since 1.8.0
 */

namespace WPCCrawler\Objects\Crawling\Preparers\Post;


use WPCCrawler\Objects\Crawling\Preparers\Post\Base\AbstractPostBotPreparer;
use WPCCrawler\Utils;

class PostCategoryPreparer extends AbstractPostBotPreparer {

    /**
     * Prepare the post bot
     *
     * @return void
     */
    public function prepare() {
        $postCategories = $this->getPreparedCategories();
        if (!$postCategories) return;

        $this->getBot()->getPostData()->setCategoryNames($postCategories);
    }

    /**
     * Finds the categories using the defined options and returns a prepared category array.
     *
     * @return array Each inner item that is an array stores a hierarchy. Non-array items is a main category with no children.
     */
    private function getPreparedCategories() {
        // Get the categories.
        $categories = $this->getValuesForSelectorSetting('_post_category_name_selectors', 'text', false, false, true);
        if (!$categories) return null;

        // If the user wants the first match, leave only the first match's results.
        $addAll = $this->bot->getSettingForCheckbox('_post_category_add_all_found_category_names');
        if (!$addAll && sizeof($categories) > 1) $categories = [$categories[0]];

        // Get the options
        $addAsSubcats = $this->bot->getSettingForCheckbox('_post_category_add_hierarchical');
        $separators = $this->bot->getSetting('_post_category_name_separators', []);

        $postCategories = [];
        foreach($categories as $catArr) {
            // If the category is empty, continue with the next one.
            if (!$catArr) continue;

            // Separate the values using the separators
            $catArr = Utils::getSeparated($catArr, $separators);

            // Add the categories to the post categories
            if ($addAsSubcats) {
                // If they should be added as hierarchical, add them as a single item.
                $postCategories[] = $catArr;
            } else {
                // Otherwise, add them as different items.
                $postCategories = array_merge($postCategories, array_flatten($catArr));
            }
        }

        return $postCategories;
    }
}