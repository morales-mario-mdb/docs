a. Add the :setting:`spec.encryptionAtRest.awsKms` object to 
   the :setting:`spec.encryptionAtRest` array in the
   :ref:`atlasproject-custom-resource`, including the
   following parameters:

   .. list-table::
      :widths: 50 50
      :header-rows: 1

      * - Parameter
        - Description

      * - ``spec.encryptionAtRest.awsKms.enabled``
        - Flag that indicates whether this project uses |aws| |kms| 
          to encrypt data at rest. To enable encryption at rest using 
          |aws| |kms|, set this parameter to ``true``. To disable
          encryption at rest using |aws| |kms|, set this parameter to
          ``false``. If you disable encryption at rest using |aws|
          |kms|, |ak8so| removes the configuration details.

      * - ``spec.encryptionAtRest.awsKms.secretRef.name``
        - Name of the secret that contains your |aws| credentials.
                    
      * - ``spec.encryptionAtRest.awsKms.secretRef.namespace``
        - Namespace that contains your |aws| credentials. If 
          unspecified, this parameter defaults to the namespace of the 
          ``AtlasProject`` custom resource.


   We recommend that you use a |k8s-secret| that contains the values 
   for ``customerMasterKeyID``, ``region``, and ``roleId`` instead of 
   the following parameters:

   - ``spec.encryptionAtRest.awsKms.customerMasterKeyID``
   - ``spec.encryptionAtRest.awsKms.region``
   - ``spec.encryptionAtRest.awsKms.roleId``

#. Run the following command:

   .. code-block:: sh

      cat <<EOF | kubectl apply -f -
      apiVersion: atlas.mongodb.com/v1
      kind: AtlasProject
      metadata:
        name: my-project
        labels:
          app.kubernetes.io/version: 1.6.0
      spec:
        name: Test Atlas Operator Project
        encryptionAtRest:
          awsKms: 
            enabled: true
            secretRef:
              name: aws-ear-creds
              namespace: mongodb-atlas-system
      EOF
