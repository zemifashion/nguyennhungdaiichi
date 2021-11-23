<?php
/**
 * Created by PhpStorm.
 * User: turgutsaricam
 * Date: 25/10/2018
 * Time: 17:55
 */

namespace WPCCrawler\Test\Base;


use Symfony\Component\DomCrawler\Crawler;
use WPCCrawler\Objects\Crawling\Bot\PostBot;
use WPCCrawler\Objects\Informing\Informer;
use WPCCrawler\Objects\Traits\FindAndReplaceTrait;
use WPCCrawler\Test\Data\TestData;
use WPCCrawler\Utils;

abstract class AbstractHtmlManipulationTest extends AbstractTest {

    use FindAndReplaceTrait;

    private $message;

    private $isFromCache = false;
    private $url = null;

    /**
     * Get the last HTML manipulation step. See {@link applyHtmlManipulationOptions}
     *
     * @return null|int
     */
    protected abstract function getLastHtmlManipulationStep();

    /**
     * Define instance variables.
     * @return void
     */
    protected abstract function defineVariables();

    /**
     * @return string
     */
    protected abstract function getMessageLastPart();

    /**
     * Returns a manipulated {@link Crawler}. {@link PostBot} is the bot that is used to get the data from the target
     * URL and it can be used to manipulate the content.
     *
     * @param Crawler $crawler
     * @param PostBot $bot
     * @return Crawler
     */
    protected abstract function manipulate($crawler, $bot);

    /**
     * @param $url
     * @param $content
     * @param $selector
     * @param $messageLastPart
     * @param null $attr
     * @return array
     */
    protected function createHtmlManipulationResults($url, $content, $selector, $messageLastPart, $attr = null) {
        $results = [];
        if($selector) {
            if($url || $content) {
                // Create a dummy bot to get the client.
                $bot = new PostBot($this->getData()->getPostSettings(), null, $this->getData()->getUseUtf8(), $this->getData()->getConvertEncodingToUtf8());
                $bot->setResponseCacheEnabled($this->getData()->isCacheTestUrlResponses());

                if($url) {
                    $this->url = $url;
                    $crawler = $bot->request($url, 'GET', $this->getData()->getRawHtmlFindReplaces());
                    $this->isFromCache = $bot->isLatestResponseFromCache();

                    // Apply the manipulation options
                    $this->applyHtmlManipulationOptions($crawler, $this->getLastHtmlManipulationStep(), $url);

                    if($crawler) $this->addResults($crawler, $bot, $results, $selector,$attr);
                }

                if($content) {
                    // Remove html, body and head tags
                    $content = str_replace(['</html>', '</body>', '</head>'], '', $content);
                    $regexFormat = '<%1$s>|<%1$s\s[^>]+>';
                    $content = $this->findAndReplaceSingle(sprintf($regexFormat, 'html'), '', $content, true);
                    $content = $this->findAndReplaceSingle(sprintf($regexFormat, 'body'), '', $content, true);
                    $content = $this->findAndReplaceSingle(sprintf($regexFormat, 'head'), '', $content, true);

                    // Create a dummy crawler
                    $dummyCrawler = $bot->createDummyCrawler($content);
                    if($dummyCrawler) $this->addResults($dummyCrawler, $bot, $results, $selector,$attr);
                }

                $message = sprintf(
                    _wpcc('Test results for %1$s with %2$s'),
                    sprintf('%1$s %2$s %3$s',
                        $url ? "<span class='highlight url'>" . $url . "</span>" : '',
                        $url && $content ? _wpcc("and") : '',
                        $content ? _wpcc("test code") : ''
                    ),
                    $messageLastPart ? $messageLastPart : ''
                );

                // Remove unnecessary spaces
                $message = $this->findAndReplaceSingle('\s{2,}', ' ', $message, true);

            } else {
                $message = _wpcc("URL and/or content must exist to conduct the test.");
            }

        } else {
            $message = _wpcc("You must provide a valid CSS selector.");
        }

        $this->message = $message;

        return $results;
    }

    /**
     * @param Crawler $crawler
     * @param $bot
     * @param $results
     * @param $selector
     * @param $attr
     */
    private function addResults($crawler, &$bot, &$results, &$selector, &$attr) {
        $crawler = $this->manipulate($crawler, $bot);

        /** @var Crawler $crawler */
        try {
            $crawler->filter($selector)->each(function ($node, $i) use (&$results, &$attr) {
                /** @var Crawler $node */
                $result = $attr ? $node->attr($attr) : Utils::getNodeHTML($node);
                if($result) $results[] = $result;
            });

        } catch(\Exception $e) {
            Informer::addError($selector . " - " . $e->getMessage())->setException($e)->addAsLog();
        }
    }

    /**
     * @param TestData $data
     * @return array|mixed|null|string
     */
    protected function createResults($data) {
        if(!$this->getData()->getFormItemValues() || !is_array($this->getData()->getFormItemValues())) return null;
        $this->defineVariables();
        return true;
    }

    /**
     * @return \Illuminate\Contracts\View\View|null
     * @throws \Exception
     */
    protected function createView() {
        return Utils::view('partials/test-result')
            ->with("results", $this->getResults())
            ->with("message", $this->message)
            ->with("isResponseFromCache", $this->isFromCache)
            ->with("testUrl", $this->url);
    }


}