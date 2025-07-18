.. list-table::
   :header-rows: 1
   :widths: 27 10 53 10 

   * - Parameter 
     - Type 
     - Description 
     - Required?

   * - ``createStore``
     - string
     - Name of the new {+fdi+} store. The {+fdi+} store 
       name must be unique.
     - yes

   * - ``provider``
     - string
     - Name of the service where the data is stored. 
       Value can be one of the following: 
       
       - ``s3`` for an |aws| |s3| bucket.
       - ``azure`` for {+az-bs+} container.
       - ``atlas`` for |service| cluster.
       - ``http`` for files hosted at publicly accessible |url|\s.
       - ``dls:<subtype>`` for online archives. {+adf+} supports the
         following subtypes:

         - ``aws`` - for data stored on |aws|. Value must be ``dls:aws``. 
         - ``azure`` - for data stored on |azure|. Value must be
           ``dls:azure``. 

     - yes
     