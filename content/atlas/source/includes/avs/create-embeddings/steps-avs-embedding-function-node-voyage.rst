.. procedure::
   :style: normal

   .. include:: /includes/avs/shared/steps-avs-nodejs-config.rst

   .. step:: Install and import dependencies.

      In a terminal window, run the following command:

      .. code-block::

         npm install mongodb voyageai

   .. step:: Store environment variables.

      a. In your project, create a ``.env`` file with the following
         contents:

         .. code-block::

            VOYAGE_API_KEY = "<api-key>"
            ATLAS_CONNECTION_STRING = "<connection-string>"

      #. Replace the ``<api-key>`` and ``<connection-string>``
         placeholder values with your `Voyage API key <https://docs.voyageai.com/docs/api-key-and-installation>`__
         and the |srv| :manual:`connection string </reference/connection-string/#find-your-mongodb-atlas-connection-string>`
         for your |service| {+cluster+}. Your connection string should use
         the following format:

         .. code-block::

            mongodb+srv://<db_username>:<db_password>@<clusterName>.<hostname>.mongodb.net

         .. include:: /includes/avs/shared/note-node-js-env-minimum-requirement.rst

      #. Save the file.

   .. step:: Define a function to generate vector embeddings.

      a. Create a file named ``get-embeddings.js``.
      #. Paste the following code. This code defines a function named ``getEmbedding`` 
         that uses the ``voyage-3-large`` model to generate an 
         embedding for a given text input.

         .. literalinclude:: /includes/avs/rag/get-embeddings-voyage.js
            :language: js
            :copyable:
            :caption: get-embeddings.js

         .. tip::

            To learn more, see `Voyage Typescript Library 
            <https://www.npmjs.com/package/voyageai>`__ and
            `embedding models <https://docs.voyageai.com/docs/embeddings>`__.

      #. Save the file.

      .. collapsible::
         :heading: (Advanced) Compress your embeddings.
         :sub_heading: Expand this section to define a function that converts your embeddings to BSON binary format.
         :expanded: false

         .. include:: /includes/avs/extracts/avs-bson-function-node-description.rst
