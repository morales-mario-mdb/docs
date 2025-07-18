.. list-table::
   :widths: 20 14 11 45 10
   :stub-columns: 1

   * - clusterNames
     - string
     - Optional
     - Cluster on which the events occurred. To return
       events from multiple clusters, specify multiple ``clusterNames``
       query parameters. For example:

       .. code-block:: http

          <Request URL>?clusterNames=Cluster1&clusterNames=Cluster2
     -

   * - eventType
     - string
     - Optional
     - Human-readable label that indicates the type of event.

       |service| accepts:

       .. include:: /includes/api/list-tables/alert-eventTypeNames.rst
     -

   * - minDate
     - date
     - Optional
     - Earliest |iso8601-time| from when |service| should return
       events.
     -

   * - maxDate
     - date
     - Optional
     - Latest |iso8601-time| from when |service| should return events.
     -

   * - includeRaw
     - boolean
     - Optional
     - Flag that specifies whether to include the ``raw`` document in
       the output. The ``raw`` document contains additional meta
       information about the event.

       .. include:: /includes/api/facts/raw-document-differs.rst
     - ``false``
