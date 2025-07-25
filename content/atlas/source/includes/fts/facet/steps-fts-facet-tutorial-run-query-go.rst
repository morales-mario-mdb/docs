.. procedure:: 
   :style: normal

   .. step:: Create a file named ``facet-query.go``. 

   .. step:: Copy and paste the following code into the ``facet-query.go`` file.

      The code example performs the following tasks:
      
      - Imports ``mongodb`` packages and dependencies.
      - Establishes a connection to your |service| cluster.
      - Uses the following searchMeta clauses to query the collection: 

        .. include:: /includes/fts/extracts/fts-facet-constant-desc.rst 

      - Iterates over the cursor to print the documents that match the 
        query.

      You can run this query using :pipeline:`$searchMeta` or using
      :pipeline:`$search` with the ``SEARCH_META`` aggregation variable. 

      .. tabs:: 

         .. tab:: $searchMeta 
            :tabid: search-meta-pipeline

            .. literalinclude:: /includes/fts/facet/tutorial.go
               :language: go
               :linenos:
               :dedent:
               :emphasize-lines: 15

         .. tab:: $search with $$SEARCH_META
            :tabid: search-meta-variable

            .. literalinclude:: /includes/fts/facet/tutorial-variable.go
               :language: go
               :linenos:
               :dedent:
               :emphasize-lines: 15

   .. step:: Replace the connection string and save the file. 
    
      .. include:: /includes/fts/facts/fact-fts-driver-connection-string.rst
  
   .. step:: Run an |fts| facet query that groups the genre and year fields into buckets.
  
      .. io-code-block::
         :copyable: true

         .. input::
            :language: bash

            go run facet-query.go

         .. output::
            :language: none
            :visible: true
         
            [
             {count [
               {lowerBound 20878}
             ]} 
             {facet [
               {genresFacet [
                 {buckets [
                  [{_id Drama} {count 12149}] 
                  [{_id Comedy} {count 6436}] 
                  [{_id Romance} {count 3274}] 
                  [{_id Crime} {count 2429}] 
                  [{_id Thriller} {count 2400}] 
                  [{_id Action} {count 2349}] 
                  [{_id Adventure} {count 1876}] 
                  [{_id Documentary} {count 1755}] 
                  [{_id Horror} {count 1432}] 
                  [{_id Biography} {count 1244}]
                 ]}
               ]} 
               {yearFacet [
                 {buckets [
                  [{_id 1910} {count 14}] 
                  [{_id 1920} {count 47}] 
                  [{_id 1930} {count 238}]
                 ]}
               ]}
             ]}
            ]

...