<div class="description">
    {{ _wpcc('You can create templates for the current item. You can use the short codes below. In addition, you can
        use custom short codes you defined in the settings. When there are more than one template, a random one
        will be selected for each found item. When testing, find-replace, general, and calculation options will be
        applied first.') }}
</div>

@include('form-items.partials.short-code-buttons', [
    'buttons' => $buttonsOptionsBoxTemplates,
])

<table class="wcc-settings">

    {{-- REMOVE IF EMPTY --}}
    <tr>
        <td>
            @include('form-items/label', [
                'for'   =>  '_options_box[remove_if_empty]',
                'title' =>  _wpcc('Remove item if it is empty?'),
                'info'  =>  _wpcc('When you check this, if the item is found to be empty, it will be removed from the results.
                    In other words, it will be treated as it was not found. It will not be included in the results.
                    The templates will not be applied.')
            ])
        </td>
        <td>
            @include('form-items/checkbox', [
                'name'  => '_options_box[remove_if_empty]'
            ])
        </td>
    </tr>

    {{-- TEMPLATES --}}
    <tr>
        <td>
            @include('form-items/label', [
                'for'   =>  '_options_box[templates]',
                'title' =>  _wpcc('Templates'),
                'info'  =>  _wpcc('Define your templates here. If there are more than one, a random template will be
                        selected.')
            ])
        </td>
        <td>
            @include('form-items/multiple', [
                'include'       =>  'form-items/textarea',
                'name'          =>  '_options_box[templates]',
                'inputKey'      =>  'template',
                'placeholder'   =>  _wpcc('Template'),
                'addKeys'       =>  true,
                'remove'        =>  true,
                'addon'         =>  'dashicons dashicons-search',
                'data'          =>  [
                    'testType'  =>  \WPCCrawler\Test\Test::$TEST_TYPE_TEMPLATE,
                    'extra'     =>  $dataExtra
                ],
                'test'          =>  true,
                'addonClasses'  => 'wcc-test-template',
                'showButtons'   => false,
                'rows'          => 4
            ])
            @include('partials/test-result-container')
        </td>
    </tr>

</table>