a. Add your AWS KMS Credentials

   Add the service account credentials to your CSFLE-enabled client
   code.

   .. literalinclude:: /includes/generated/in-use-encryption/csfle/python/aws/reader/make_data_key.py
      :start-after: start-kmsproviders
      :end-before: end-kmsproviders
      :language: python
      :dedent:

   .. include:: /includes/queryable-encryption/tutorials/automatic/named-kms-note.rst

       .. replacement:: kms-provider

          AWS
                     
       .. replacement:: kms-provider-name

          "my_aws_provider"

   .. literalinclude:: /includes/queryable-encryption/tutorials/automatic/aws/named-kms/named-kms.py
      :language: python
      :dedent:

#. Add Your Key Information

   Update the following code to specify your {+cmk-long+}:

   .. tip::

      You recorded your {+cmk-long+}'s {+aws-arn-abbr+} and Region
      in the Create a {+cmk-long+} step of this guide.

   .. literalinclude:: /includes/generated/in-use-encryption/csfle/python/aws/reader/make_data_key.py
      :start-after: start-datakeyopts
      :end-before: end-datakeyopts
      :language: python
      :dedent:

#. Generate your {+dek-long+}

   .. _csfle-aws-create-dek-python:

   .. literalinclude:: /includes/generated/in-use-encryption/csfle/python/aws/reader/make_data_key.py
      :start-after: start-create-dek
      :end-before: end-create-dek
      :language: python
      :dedent:

.. tip:: Learn More

   To view a diagram showing how your client application creates your
   {+dek-long+} when using an AWS KMS, see
   :ref:`qe-fundamentals-kms-providers-aws-architecture`.

   To learn more about the options for creating a {+dek-long+}
   encrypted with a {+cmk-long+} hosted in AWS KMS, see
   :ref:`qe-kms-datakeyopts-aws`.
