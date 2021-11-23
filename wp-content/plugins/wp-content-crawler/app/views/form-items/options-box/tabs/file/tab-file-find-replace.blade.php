<div class="description">
    {!! _wpcc("Find and replace in <b>each saved file's name</b>. These options will be applied after the file is saved
    and before any changes are made to the current item.") !!}
    {!! _wpcc_trans_regex() !!}
    {!! _wpcc_file_options_box_tests_note() !!}
</div>

<table class="wcc-settings">
    <tr>
        <td>
            @include('form-items/multiple', [
                'include'       =>  'form-items/find-replace',
                'name'          =>  '_options_box[file_find_replace]',
                'addKeys'       =>  true,
                'remove'        =>  true,
                'addon'         =>  'dashicons dashicons-search',
                'data'          =>  [
                    'testType'  =>  \WPCCrawler\Test\Test::$TEST_TYPE_FILE_FIND_REPLACE,
                    'extra'     =>  $dataExtra
                ],
                'test'          => true,
                'addonClasses'  => 'wcc-test-find-replace'
            ])
            @include('partials/test-result-container')</td>
    </tr>

</table>