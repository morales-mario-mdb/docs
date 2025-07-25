.. step::  Connect to your MongoDB instance.

  .. include:: /includes/drivers_connect_2.rst

.. step:: Select documents using the less-than operator.

   Use :manual:`dot notation </core/document/#embedded-documents>`
   in this query to select documents where the embedded document ``surfaceTemperatureC``
   has a value in its ``mean`` field less than 15 degrees (Celsius).

   .. include:: /includes/find-less-than.rst

.. step:: Check your results.

   Here is the complete code followed by sample output. Results have been
   truncated for display purposes.

   .. include:: /includes/crud_read_operator_final_less_than.rst
