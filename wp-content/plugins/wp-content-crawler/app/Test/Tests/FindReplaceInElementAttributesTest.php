<?php
/**
 * Created by PhpStorm.
 * User: turgutsaricam
 * Date: 25/10/2018
 * Time: 17:53
 */

namespace WPCCrawler\Test\Tests;


use Symfony\Component\DomCrawler\Crawler;
use WPCCrawler\Objects\Crawling\Bot\PostBot;
use WPCCrawler\Test\Base\AbstractHtmlManipulationTest;
use WPCCrawler\Test\Base\AbstractTest;
use WPCCrawler\Test\Data\TestData;
use WPCCrawler\Utils;

class FindReplaceInElementAttributesTest extends AbstractHtmlManipulationTest {

    private $url;
    private $content;
    private $selector;
    private $attr;
    private $find;
    private $replace;
    private $regex;

    /**
     * Get the last HTML manipulation step. See {@link applyHtmlManipulationOptions}
     *
     * @return null|int
     */
    protected function getLastHtmlManipulationStep() {
        return AbstractTest::MANIPULATION_STEP_INITIAL_REPLACEMENTS;
    }

    /**
     * Define instance variables.
     * @return void
     */
    protected function defineVariables() {
        $formItemValues = $this->getData()->getFormItemValues();

        $this->url      = $this->getData()->get("url");
        $this->content  = $this->getData()->get("subject");
        $this->selector = Utils::array_get($formItemValues, "selector");
        $this->attr     = Utils::array_get($formItemValues, "attr");
        $this->find     = Utils::array_get($formItemValues, "find");
        $this->replace  = Utils::array_get($formItemValues, "replace");
        $this->regex    = isset($formItemValues["regex"]);
    }

    /**
     * @return string
     */
    protected function getMessageLastPart() {
        return sprintf('%1$s %2$s %3$s %4$s %5$s',
            $this->selector   ? "<span class='highlight selector'>" . $this->selector . "</span>"                   : '',
            $this->attr       ? "<span class='highlight attribute'>" . $this->attr . "</span>"                      : '',
            $this->find       ? "<span class='highlight find'>" . htmlspecialchars($this->find) . "</span>"         : '',
            $this->replace    ? "<span class='highlight replace'>" . htmlspecialchars($this->replace) . "</span>"   : '',
            $this->regex      ? _wpcc("(as regex)") : ''
        );
    }

    /**
     * Returns a manipulated {@link Crawler}. {@link PostBot} is the bot that is used to get the data from the target
     * URL and it can be used to manipulate the content.
     *
     * @param Crawler $crawler
     * @param PostBot $bot
     * @return Crawler
     */
    protected function manipulate($crawler, $bot) {
        $bot->findAndReplaceInElementAttribute($crawler, [$this->selector], $this->attr, $this->find, $this->replace, $this->regex);
        return $crawler;
    }

    /**
     * Conduct the test and return an array of results.
     *
     * @param TestData $data Information required for the test
     * @return array|string|mixed
     */
    protected function createResults($data) {
        if (parent::createResults($data) === null) return null;

        return $this->createHtmlManipulationResults($this->url, $this->content, $this->selector, $this->getMessageLastPart());
    }
}