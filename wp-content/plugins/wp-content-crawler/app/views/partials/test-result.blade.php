@if(isset($message))
    <p>{!! $message !!}</p>
@endif

{{-- RESULT LIST --}}
<ul data-results="{{ json_encode($results) }}">
    <?php
        $actualResults = isset($modifiedResults) ? $modifiedResults : $results;
        if (!$actualResults) $actualResults = [];
    ?>
    @foreach($actualResults as $result)
        <li><code>{{ $result }}</code></li>
    @endforeach
</ul>

{{-- "NO RESULT" MESSAGE --}}
@if(empty($actualResults))
    <span class="no-result">{{ _wpcc('No result') }}</span>
@endif

{{-- If there are modified results and they are different than the results, show the user original results as well. --}}
@if(isset($modifiedResults) && $modifiedResults !== $results)
    <div class="original-results">
        <a role="button" class="see-unmodified-results">{{ _wpcc("See unmodified results") }}</a>
        <ul class="hidden">
            @foreach($results as $result)
                <li><code>{{ $result }}</code></li>
            @endforeach
        </ul>
    </div>
@endif

{{-- MEMORY USAGE AND ELAPSED TIME --}}
@if(isset($memoryUsage) && isset($elapsedTime))
    <div class="usage">
        <span title="{{ _wpcc("Used memory") }}">{{ $memoryUsage }} MB</span>
        /
        <span title="{{ _wpcc("Elapsed time") }}">{{ $elapsedTime }} ms</span>
    </div>
@endif

{{-- "FROM CACHE" INFO --}}
@include('.partials.notification-for-url-cache')

{{-- INFO LIST --}}
@include('partials.info-list')