.. start-prep-steps

Create the Template App
~~~~~~~~~~~~~~~~~~~~~~~

.. include:: /includes/aggregation/aggregation-examples/template-apps/c-template-app.rst

Create the Collection
~~~~~~~~~~~~~~~~~~~~~

This example uses a ``persons`` collection, which contains documents
describing each person's name, date of birth, vocation, and other
details. The aggregation selects documents based on whether
their field values match specified criteria.

To create the ``persons`` collection and insert the sample data, add the
following code to your application:

.. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
   :language: c
   :copyable: true
   :start-after: start-insert-persons
   :end-before: end-insert-persons
   :dedent:

.. end-prep-steps

.. start-tutorial

.. procedure::
   :style: connected

   .. step:: Add a match stage for people who are engineers.

      In your pipeline, create a :pipeline:`$match` stage
      that finds documents in which the value of the ``vocation`` field
      is ``"ENGINEER"``:

      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-match
         :end-before: end-match
         :dedent:

   .. step:: Add a sort stage to sort from youngest to oldest.

      Next, create a :pipeline:`$sort` stage that sorts the
      documents in descending order by the ``dateofbirth`` field to
      list the youngest people first:

      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-sort
         :end-before: end-sort
         :dedent:

   .. step:: Add a limit stage to see only three results.

      Next, create a :pipeline:`$limit`
      stage to the pipeline to output only the first three documents in
      the results.

      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-limit
         :end-before: end-limit
         :dedent:

   .. step:: Add an unset stage to remove unneeded fields.

      Finally, create an :pipeline:`$unset` stage. The
      ``$unset`` stage removes unnecessary fields from the result documents:
            
      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-unset
         :end-before: end-unset
         :dedent:

      .. tip::

         Use the ``$unset`` operator instead of ``$project`` to avoid
         modifying the aggregation pipeline if documents with
         different fields are added to the collection.

   .. step:: Run the aggregation pipeline.

      Add the following code to the end of your application to perform
      the aggregation on the ``persons`` collection:

      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-run-agg
         :end-before: end-run-agg
         :dedent:

      Ensure that you clean up the collection resources by adding the
      following line to your cleanup statements:

      .. literalinclude:: /includes/aggregation/aggregation-examples/filtered-subset/full-files/filtered-subset.c
         :language: c
         :copyable: true
         :start-after: start-cleanup
         :end-before: end-cleanup
         :dedent:

      Finally, run the following commands in your shell to generate and
      run the executable:

      .. code-block:: bash
      
         gcc -o aggc agg-tutorial.c $(pkg-config --libs --cflags libmongoc-1.0)
         ./aggc

      .. tip::

         If you encounter connection errors by running the preceding
         commands in one call, you can run them separately.

   .. step:: Interpret the aggregation results.

      The aggregated result contains three documents. The documents
      represent the three youngest people with the vocation of ``"ENGINEER"``,
      ordered from youngest to oldest. The results omit the ``_id`` and ``address``
      fields.

      .. code-block:: none
         :copyable: false

         { "person_id" : "7363626383", "firstname" : "Carl", "lastname" : "Simmons", "dateofbirth" : { "$date" : { "$numberLong" : "915250045000" } }, "vocation" : "ENGINEER" }
         { "person_id" : "6392529400", "firstname" : "Elise", "lastname" : "Smith", "dateofbirth" : { "$date" : { "$numberLong" : "653616727000" } }, "vocation" : "ENGINEER" }
         { "person_id" : "1723338115", "firstname" : "Olive", "lastname" : "Ranieri", "dateofbirth" : { "$date" : { "$numberLong" : "485113500000" } }, "gender" : "FEMALE", "vocation" : "ENGINEER" }

.. end-tutorial
