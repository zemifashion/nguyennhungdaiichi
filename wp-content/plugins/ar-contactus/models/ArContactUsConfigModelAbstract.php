<?php

ArContactUsLoader::loadClass('ArContactUsTools');

abstract class ArContactUsConfigModelAbstract
{
    protected $errors = array();
    protected $configPrefix = null;
    protected $defaultAttributeType = 'text';
    
    protected $isLoaded = false;

    protected $formHelper = null;

    public function __construct($configPrefix = null)
    {
        $this->configPrefix = $configPrefix;
    }
    
    public function getFormHelper()
    {
        if ($this->formHelper === null){
            ArContactUsLoader::loadClass('ArContactUsFormHelper');
            $this->formHelper = new ArContactUsFormHelper($this);
        }
        return $this->formHelper;
    }
    
    public function getLangValue($attribute, $lang)
    {
        $value = $this->getAttribute($attribute);
        if ($this->getMultiLangAttribute($attribute)) {
            if (is_object($value)) {
                return isset($value->$lang)? $value->$lang : null;
            } elseif(is_array($value)) {
                return isset($value[$lang])? $value[$lang] : null;
            }
        }
        return $value;
    }
    
    public function isLoaded()
    {
        return $this->isLoaded;
    }
    
    public function overrideUnsafeAttributes()
    {
        return array();
    }
    
    public function isAttributeUnsafe($attribute)
    {
        $attrs = $this->overrideUnsafeAttributes();
        return (in_array($attribute, $attrs));
    }
    
    public function attributeLabels()
    {
        return array();
    }
    
    public function attributeHints()
    {
        return array();
    }
    
    public function attributeDescriptions()
    {
        return array();
    }
    
    public function getMultiLangAttribute($attribute)
    {
        $labels = $this->multiLangFields();
        if (isset($labels[$attribute])) {
            return $labels[$attribute];
        }
        return false;
    }
    
    public function multiLangFields()
    {
        return array();
    }
    
    public function rules()
    {
        return array();
    }
    
    public function outputFilters()
    {
        return array();
    }
    
    public function filters()
    {
        return array();
    }
    
    public function getAttributeLabel($attribute)
    {
        $labels = $this->attributeLabels();
        if (isset($labels[$attribute])) {
            return $labels[$attribute];
        }
        return $attribute;
    }
    
    public function getAttributeHint($attribute)
    {
        $hints = $this->attributeHints();
        if (isset($hints[$attribute])) {
            return $hints[$attribute];
        }
        return null;
    }
    
    public function getAttributeDescription($attribute)
    {
        $descriptions = $this->attributeDescriptions();
        if (isset($descriptions[$attribute])) {
            return $descriptions[$attribute];
        }
        return null;
    }
    
    public function isAttributeSafe($attribute)
    {
        if ($this->isAttributeUnsafe($attribute)){
            return false;
        }
        $rules = $this->rules();
        foreach ($rules as $rule) {
            if (isset($rule[0]) && isset($rule[1]) && in_array($attribute, $rule[0]) && $rule[1] != 'unsafe') {
                return true;
            }
        }
        return false;
    }
    
    public function isAttributeRequired($attribute)
    {
        $rules = $this->rules();
        foreach ($rules as $rule) {
            if (isset($rule[0]) && isset($rule[1]) && in_array($attribute, $rule[0]) && $rule[1] == 'validateRequired') {
                return true;
            }
        }
        return false;
    }
    
    public function getAttributes()
    {
        $attributes = array();
        foreach ($this as $attribute => $value) {
            if ($this->isAttributeSafe($attribute)) {
                $attributes[$attribute] = $value;
            }
        }
        return $attributes;
    }
    
    public function beforeSave()
    {
        return true;
    }
    
    public function saveToConfig($runValidation = true, $attributes = array(), $json = true)
    {
        $data = array();
        if (!$this->beforeSave()) {
            return false;
        }
        if (($runValidation && $this->validate()) || !$runValidation) {
            foreach ($this->getAttributes() as $attr => $value) {
                if (($attributes && in_array($attr, $attributes)) || empty($attributes)) {
                    $a = $this->getConfigAttribueName($attr, false);
                    if ($this->getMultipleSelect($attr)) {
                        if (is_array($value)) {
                            $value = implode(',', $value);
                        }
                    }
                    if ($a == 'ARCUP_GDPR_TITLE') {
                        if (is_array($value)) {
                            foreach ($value as $k => $v) {
                                $value[$k] = stripslashes($v);
                            }
                        } else {
                            $value = stripslashes($value);
                        }
                    }
                    $data[$a] = $value;
                    if (!$json) {
                        update_option($a, $value);
                    }
                }
            }
            if ($json) {
                update_option($this->getJsonConfigKey(), json_encode($data));
            }
            return true;
        }
        return false;
    }
    
    public function loadFromConfig($json = true)
    {
        if ($json && $this->getJsonConfigKey()) {
            $data = get_option($this->getJsonConfigKey());
            $data = json_decode($data, true);
        }
        
        $isWPML = $this->isWPML();
        $langs = $this->getLanguages();
        $defaultLang = $this->getDefaultLanguage();
        
        $attributes = array();
        foreach ($this->getAttributeNames() as $attr) {
            $attributes[] = $this->getConfigAttribueName($attr, false);
        }
        if ($attributes) {
            foreach ($attributes as $attr){
                $a = $this->getModelAttributeName($attr);
                if ($json && $this->getJsonConfigKey()) {
                    $v = isset($data[$attr])? $data[$attr] : null;
                } else {
                    $v = get_option($attr);
                }
                if ($this->isAttributeSafe($a)) {
                    if ($this->getMultipleSelect($a)){
                        $this->$a = explode(',', $v);
                    }else{
                        if ($this->getMultiLangAttribute($a)) {
                            if ($isWPML) {
                                if (is_array($v)) {
                                    $this->$a = $v;
                                } else {
                                    foreach ($langs as $code => $lang) {
                                        $this->$a[$code] = $v;
                                    }
                                }
                            } else {
                                if (is_array($v)) {
                                    $this->$a = reset($v);
                                } else {
                                    $this->$a = $v;
                                }
                            }
                        } else {
                            $this->$a = $v;
                        }
                    }
                }
            }
        }
        $this->isLoaded = true;
    }
    
    public function getJsonConfigKey()
    {
        return null;
    }
    
    public function getErrors()
    {
        return $this->errors;
    }
    
    public function addError($attribute, $error)
    {
        if (isset($this->errors[$attribute])) {
            $this->errors[$attribute][] = $error;
        } else {
            $this->errors[$attribute] = array($error);
        }
    }
    
    public function filter()
    {
        foreach ($this->getAttributes() as $attr => $value) {
            if ($filters = $this->getAttributeFilters($attr)) {
                foreach ($filters as $filter) {
                    $method = $filter['filter'];
                    if ($this->getMultiLangAttribute($attr) && is_array($value)) {
                        foreach ($value as $k => $v) {
                            if (method_exists($this, $method)) {
                                $this->$attr[$k] = $this->$method($v, $filter['params']);
                            }
                        }
                    } else {
                        if (method_exists($this, $method)) {
                            $this->$attr = $this->$method($value, $filter['params']);
                        }
                    }
                }
            }
        }
    }
    
    public function outputFilter()
    {
        foreach ($this->getAttributes() as $attr => $value) {
            if ($filters = $this->getAttributeOutputFilters($attr)) {
                foreach ($filters as $filter) {
                    if (method_exists($this, $filter)) {
                        $this->$filter($value);
                        $this->$attr = $value;
                    }
                }
            }
        }
        return true;
    }
    
    public function stripSlashes($value)
    {
        
        if (is_array($value)) {
            foreach ($value as $k => $v) {
                $value[$k] = stripslashes($v);
            }
        } else {
            $value = stripslashes($value);
        }
        return $value;
    }
    
    public function validate($addErrors = true)
    {
        if ($addErrors) {
            $this->errors = array();
        }
        $this->filter();
        $valid = true;
        foreach ($this->getAttributes() as $attr => $value) {
            if ($validators = $this->getAttributeValidators($attr)) {
                foreach ($validators as $validator) {
                    $method = $validator['validator'];
                    $params = isset($validator['params'])? $validator['params'] : array();
                    if ((isset($validator['on']) && $validator['on']) || (!isset($validator['on']) || $validator['on'] === null)) {
                        if (method_exists('Validate', $method)) {
                            if ($this->getMultiLangAttribute($attr) && is_array($value)) {
                                foreach ($value as $v) {
                                    if (Validate::$method($v)) {
                                        $valid = $valid && Validate::$method($v);
                                    } else {
                                        if ($addErrors) {
                                            if (isset($validator['message'])) {
                                                $this->addError($attr, $this->getMessage($validator['message'], $attr, $value));
                                            } else {
                                                $this->addError($attr, sprintf(__('Incorrect "%s" value', 'ar-contactus'), $this->getAttributeLabel($attr)));
                                            }
                                        }
                                        $valid = false;
                                    }
                                }
                            } else {
                                if (Validate::$method($value)) {
                                    $valid = $valid && Validate::$method($value);
                                } else {
                                    if ($addErrors) {
                                        if (isset($validator['message'])) {
                                            $this->addError($attr, $this->getMessage($validator['message'], $attr, $value));
                                        } else {
                                            $this->addError($attr, sprintf(__('Incorrect "%s" value', 'ar-contactus'), $this->getAttributeLabel($attr)));
                                        }
                                    }
                                    $valid = false;
                                }
                            }
                        } elseif (method_exists($this, $method)) {
                            if ($this->getMultiLangAttribute($attr) && is_array($value)) {
                                foreach ($value as $lang => $v) {
                                    if ($this->$method($v, $params)) {
                                        $valid = $valid && $this->$method($v, $params);
                                    } else {
                                        if ($addErrors) {
                                            if (isset($validator['message'])) {
                                                $this->addError($attr, $this->getMessage($validator['message'], $attr, $value));
                                            } else {
                                                $this->addError($attr, sprintf(__('Incorrect "%s" value for "%s" language', 'ar-contactus'), $this->getAttributeLabel($attr), $lang));
                                            }
                                        }
                                        $valid = false;
                                    }
                                }
                            } else {
                                if ($this->$method($value, $params)) {
                                    $valid = $valid && $this->$method($value, $params);
                                } else {
                                    if ($addErrors) {
                                        if (isset($validator['message'])) {
                                            $this->addError($attr, $this->getMessage($validator['message'], $attr, $value));
                                        } else {
                                            $this->addError($attr, sprintf(__('Incorrect "%s" value', 'ar-contactus'), $this->getAttributeLabel($attr)));
                                        }
                                    }
                                    $valid = false;
                                }
                            }
                        }
                    } else {
                        $valid = $valid && true;
                    }
                }
            }
        }
        return $valid;
    }
    
    protected function filterStripTags($value, $params = array())
    {
        if (isset($params['allowedTags']) && $params['allowedTags']) {
            return strip_tags($value, $params['allowedTags']);
        }
        return strip_tags($value);
    }
    
    public function interval($value, $params)
    {
        $data = explode('-', $value);
        foreach ($data as $v) {
            if (!Validate::isInt($v)) {
                return false;
            }
        }
        if (count($data) > 2) {
            return false;
        }
        foreach ($data as $v) {
            if (isset($params['min'])) {
                if ($v < $params['min']) {
                    return false;
                }
            }
            if (isset($params['max'])) {
                if ($v > $params['max']) {
                    return false;
                }
            }
        }
        return true;
    }


    protected function integer($value, $params = array())
    {
        if (Validate::isInt($value)) {
            if (isset($params['min']) && $value >= $params['min']) {
                if (isset($params['max']) && $value <= $params['max']) {
                    return true;
                } elseif (!isset($params['max'])) {
                    return true;
                }
            }
        }
        return false;
    }


    protected function getMessage($message, $attribute, $value)
    {
        return strtr($message, array(
            '{attribute}' => $attribute,
            '{label}' => $this->getAttributeLabel($attribute),
            '{value}' => $value
        ));
    }

    
    public function getAttributeOutputFilters($attribute)
    {
        $outputFilters = $this->outputFilters();
        $filters = array();
        foreach ($outputFilters as $rule) {
            if (isset($rule[0]) && isset($rule[1]) && in_array($attribute, $rule[0])) {
                $filters[] = $rule[1];
            }
        }
        return $filters;
    }
    

    public function getAttributeValidators($attribute)
    {
        $rules = $this->rules();
        $validators = array();
        foreach ($rules as $rule) {
            if (isset($rule[0]) && isset($rule[1]) && in_array($attribute, $rule[0]) && $rule[1] != 'unsafe') {
                $validator = array(
                    'validator' => $rule[1],
                    'params' => isset($rule['params'])? $rule['params'] : array(),
                    'message' => isset($rule['message'])? $rule['message'] : null,
                );
                if (isset($rule['on'])) {
                    $validator['on'] = $rule['on'];
                }
                $validators[] = $validator;
            }
        }
        return $validators;
    }
    
    public function getAttributeFilters($attribute)
    {
        $rules = $this->filters();
        $filters = array();
        foreach ($rules as $rule) {
            if (isset($rule[0]) && isset($rule[1]) && in_array($attribute, $rule[0])) {
                $filter = array(
                    'filter' => $rule[1],
                    'params' => isset($rule['params'])? $rule['params'] : array()
                );
                if (isset($rule['on'])) {
                    $filter['on'] = $rule['on'];
                }
                $filters[] = $filter;
            }
        }
        return $filters;
    }
    
    public function setAttributes($attributes)
    {
        foreach ($attributes as $attribute => $value){
            $this->setAttribute($attribute, $value);
        }
    }
    
    public function setAttribute($attribute, $value)
    {
        if ($this->isAttributeSafe($attribute)){
            if ($this->getMultipleSelect($attribute)){
                if (!is_array($value)){
                    $this->$attribute = explode(',', $value);
                } else {
                    $this->$attribute = $value;
                }
            }else{
                $this->$attribute = $value;
            }
        }
    }
    
    public function populate()
    {
        $attributes = array();
        foreach ($this->getAttributes() as $attribute => $value) {
            $name = $this->getConfigAttribueName($attribute, false);
            if (isset($_POST[$name])) {
                $attributes[$attribute] = $_POST[$name];
            }
        }
        foreach ($attributes as $attr => $value) {
            $this->$attr = $value;
        }
    }
    
    public function isAttributeHasErrors($attribute)
    {
        if (isset($this->errors[$attribute])) {
            return true;
        }
        return false;
    }
    
    public function getModelAttributeName($attribute)
    {
        $attr = strtolower($attribute);
        if ($this->configPrefix) {
            return str_replace($this->configPrefix, '', $attr);
        }
        return $attr;
    }
    
    public function getConfigAttribueId($attribute)
    {
        $attribute = $this->configPrefix . $attribute;
        return strtoupper($attribute);
    }
    
    public function getConfigAttribueName($attribute, $multi = true)
    {
        if ($this->getMultipleSelect($attribute) && $multi && $this->getAttributeType($attribute) != 'html') {
            $multi = '[]';
        } else {
            $multi = '';
        }
        $attribute = $this->configPrefix . $attribute . $multi;
        return strtoupper($attribute);
    }
    
    public function validateRequired($value)
    {
        return !empty($value);
    }
    
    public function getAttribute($attribute, $default = null)
    {
        $attributes = $this->getAttributes();
        return isset($attributes[$attribute])? $attributes[$attribute] : $default;
    }
    
    public function isWPML()
    {
        return ArContactUsTools::isMultilang();
    }
    
    public function getLanguages()
    {
        return ArContactUsTools::getLanguages();
    }
    
    public function getCurrentLanguage()
    {
        return ArContactUsTools::getCurrentLanguage();
    }
    
    public function getDefaultLanguage()
    {
        return ArContactUsTools::getDefaultLanguage();
    }
    
    public function getFormHelperConfig()
    {
        $langs = array();
        $defaultLang = null;
        $isWPML = $this->isWPML();
        if ($isWPML) {
            $langs = $this->getLanguages();
            $defaultLang = $this->getDefaultLanguage();
        }
        
        $config = array(
            'form' => array(
                'id' => get_called_class(),
                'title' => $this->getFormTitle(),
                'icon' => $this->getFormIcon()
            ),
            'fields' => array(),
            'wpml' => $isWPML,
            'languages' => $langs,
            'defaultLang' => $defaultLang
        );
        
        foreach ($this->getAttributeNames() as $attr) {
            $name = $this->getConfigAttribueName($attr);
            $config['fields'][$name] = array(
                'type' => $this->getAttributeType($attr),
                'label' => $this->getAttributeLabel($attr),
                'multiple' => $this->getMultipleSelect($attr),
                'id' => $this->getConfigAttribueId($attr),
                'name' => $name,
                'prefix' => $this->getFieldPrefix($attr),
                'suffix' => $this->getFieldSuffix($attr),
                'lang' => $this->getMultiLangAttribute($attr),
                'placeholder' => $this->getAttributePlaceholder($attr),
                'form_group_class' => $this->getFormGroupClass($attr),
                'hint' => $this->getAttributeHint($attr),
                'desc' => $this->getAttributeDescription($attr),
                'required' => $this->isAttributeRequired($attr),
                'value' => $this->getAttribute($attr)
            );
            if ($this->getAttributeType($attr) == 'switch') {
                $config['fields'][$name]['values'] = array(
                    array(
                        'id' => 'active_on',
                        'value' => true,
                        'label' => __('Enabled', 'ar-contactus'),
                    ),
                    array(
                        'id' => 'active_off',
                        'value' => false,
                        'label' => __('Disabled', 'ar-contactus'),
                    )
                );
            }
            if ($this->getAttributeType($attr) == 'html') {
                $config['fields'][$name]['html_content'] = $this->getHtmlField($attr);
                $config['fields'][$name]['name'] = $this->getHtmlField($attr);
            }
            if ($this->getAttributeType($attr) == 'select' || $this->getAttributeType($attr) == 'iconDropdown') {
                $config['fields'][$name]['grouped'] = $this->getGroupedSelect($attr);
                if ($this->getGroupedSelect($attr)) {
                    $config['fields'][$name]['options'] = array(
                        'optiongroup' => array(
                            'query' =>  $this->getSelectOptions($attr),
                            'label' => 'name'
                        ),
                        'options' => array(
                            'query' => 'items',
                            'id' => 'id',
                            'name' => 'name'
                        ),
                        'values' => $this->getSelectOptions($attr)
                    );
                } else {
                    $config['fields'][$name]['options'] = array(
                        'values' => $this->getSelectOptions($attr)
                    );
                }
            }
        }
        return $config;
    }
    
    public function getFieldPrefix($attribute)
    {
        $prefix = $this->fieldPrefix();
        if (isset($prefix[$attribute])) {
            return $prefix[$attribute];
        }
        return null;
    }
    
    public function fieldPrefix()
    {
        return array();
    }
    
    public function getFieldSuffix($attribute)
    {
        $suffix = $this->fieldSuffix();
        if (isset($suffix[$attribute])) {
            return $suffix[$attribute];
        }
        return null;
    }
    
    public function fieldSuffix()
    {
        return array();
    }
    
    public function getHtmlField($attribute)
    {
        $pls = $this->htmlFields();
        if (isset($pls[$attribute])) {
            return $pls[$attribute];
        }
        return null;
    }
    
    public function htmlFields()
    {
        return array();
    }
    
    public function groupedSelects()
    {
        return array();
    }
    
    public function getGroupedSelect($attribute)
    {
        $pls = $this->groupedSelects();
        if (isset($pls[$attribute])) {
            return $pls[$attribute];
        }
        return null;
    }
    
    public function multipleSelects()
    {
        return array();
    }
    
    public function getMultipleSelect($attribute)
    {
        $pls = $this->multipleSelects();
        if (isset($pls[$attribute])) {
            return $pls[$attribute];
        }
        return null;
    }
    
    public function attributePlaceholders()
    {
        return array();
    }
    
    public function getAttributePlaceholder($attribute)
    {
        $pls = $this->attributePlaceholders();
        if (isset($pls[$attribute])) {
            return $pls[$attribute];
        }
        return null;
    }


    public function getSelectOptions($attribute)
    {
        $method = $this->toCamelCase("{$attribute}SelectOptions");
        if (method_exists(get_called_class(), $method)) {
            return $this->$method();
        }
    }
    
    public function getFormTitle()
    {
        return null;
    }
    
    public function getFormIcon()
    {
        return 'icon-cog';
    }
    
    public function attributeTypes()
    {
        return array();
    }
    
    public function getAttributeType($attribute)
    {
        $types = $this->attributeTypes();
        if (isset($types[$attribute])) {
            return $types[$attribute];
        }
        return $this->defaultAttributeType;
    }
    
    public function getFormGroupClass($attr)
    {
        $addClass = 'field_' . strtolower($attr);
        if ($this->getAddCssClass($attr)) {
            $addClass .= (' ' . $this->getAddCssClass($attr));
        }
        return $this->isAttributeHasErrors($attr)? ('has-error ' . $addClass) : $addClass;
    }
    
    public function getAddCssClass($attribute)
    {
        $classes = $this->attributeCssClasses();
        if (isset($classes[$attribute])) {
            return $classes[$attribute];
        }
    }
    
    public function attributeCssClasses()
    {
        return array();
    }
    
    public function attributeDefaults()
    {
        return array();
    }
    
    public function getAttributeDefault($attribute)
    {
        $defaults = $this->attributeDefaults();
        $value = isset($defaults[$attribute])? $defaults[$attribute] : null;
        
        return $value;
    }
    
    public function loadAttributeDefault($attribute)
    {
        if (!empty($attribute)) {
            $this->$attribute = $this->getAttributeDefault($attribute);
        }
    }
    
    public function loadDefaults()
    {
        foreach ($this->getAttributeNames() as $attribute) {
            $this->loadAttributeDefault($attribute);
        }
    }
    
    public function clearConfig()
    {
        foreach ($this->getAttributeNames() as $attribute) {
            $a = $this->getConfigAttribueName($attribute, false);
            delete_option($a);
        }
        delete_option($this->getJsonConfigKey());
    }
    
    public function getAttributeNames()
    {
        return array_keys($this->getAttributes());
    }
    
    public function toCamelCase($str, $catapitalise_first_char = false)
    {
        $str = strtolower($str);
        if ($catapitalise_first_char) {
            $str = ucfirst($str);
        }
        return preg_replace_callback('/_+([a-z])/', function($c){
            return strtoupper($c[1]);
        }, $str);
    }
}
