To navigate to the |service| :guilabel:`AWS IAM Role Access` screen:

.. procedure::
   :style: normal

   .. include:: /includes/nav/steps-project-integrations.rst

   .. step:: Configure the |service| :guilabel:`AWS IAM Role Access`.
      
      Click the :guilabel:`Configure` button in the :guilabel:`AWS IAM Role Access` panel.

      .. note::

         If you already have one or more roles configured, the button
         reads :guilabel:`Edit`.

      You can perform the following actions from the |service| 
      :guilabel:`AWS IAM Role Access` screen:

      - **View the list of authorized AWS IAM roles.**

        The list of roles displays the role's |arn|, its time of 
        creation, and any |service| services configured to use the role.

      - **Authorize an AWS IAM role.**

        Click the :guilabel:`Authorize an AWS IAM Role` button.

        .. note:: 
  
           If you have an authorization in progress, the associated 
           role has a :guilabel:`Resume` button next to it.

        For detailed instructions, see :ref:`set-up-unified-aws-access`.

      - **Deauthorize an AWS IAM role.**

        Click the :guilabel:`Delete` button next to the role.

        .. note::

           Be sure to remove any associated |service| services from the 
           IAM role before you deauthorize it.

      - **View the details of an AWS IAM role.**

        Click the ellipsis (:guilabel:`...`) icon next to the role and 
        select :guilabel:`View Role Details`.
        