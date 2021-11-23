<?php
/**
 * Created by PhpStorm.
 * User: turgutsaricam
 * Date: 04/11/2018
 * Time: 15:29
 */

namespace WPCCrawler\Migrations;


use WPCCrawler\Migrations\Base\AbstractMigration;
use WPCCrawler\Services\DatabaseService;

/**
 * Performs necessary database migrations.
 *
 * @package WPCCrawler\migrations
 */
class DatabaseMigrator {

    /** @var DatabaseService */
    private $dbService;

    /**
     * DatabaseMigrator constructor.
     *
     * @param DatabaseService $dbService
     */
    public function __construct($dbService) {
        $this->dbService = $dbService;
    }


    /**
     * @return AbstractMigration[]
     */
    private function getMigrations() {
        // Create the migrations and return
        return [
            new M001_V4_0_UpdateSitePostMetaValues($this->dbService)
        ];
    }

    /**
     * Performs necessary database migrations.
     */
    public function migrate() {
        // Perform the migrations
        foreach($this->getMigrations() as $migration) {
            $migration->maybeMigrate();
        }
    }

}