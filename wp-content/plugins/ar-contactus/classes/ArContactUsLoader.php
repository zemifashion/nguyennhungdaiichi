<?php
class ArContactUsLoader
{
    public static function loadClass($className)
    {
        require_once(AR_CONTACTUS_PLUGIN_DIR_CLASSES . $className . '.php');
    }
    
    public static function loadModel($className)
    {
        require_once(AR_CONTACTUS_PLUGIN_DIR_MODELS . $className . '.php');
    }
    
    public static function loadController($className)
    {
        require_once(AR_CONTACTUS_PLUGIN_DIR_CONTROLLERS . $className . '.php');
    }
    
    public static function isClassExists($className)
    {
        return file_exists(AR_CONTACTUS_PLUGIN_DIR_CLASSES . $className . '.php');
    }
    
    public static function isModelExists($className)
    {
        return file_exists(AR_CONTACTUS_PLUGIN_DIR_MODELS . $className . '.php');
    }
    
    public static function isControllerExists($className)
    {
        return file_exists(AR_CONTACTUS_PLUGIN_DIR_CONTROLLERS . $className . '.php');
    }
}
