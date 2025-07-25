.. procedure::
   :style: normal

   .. include:: /includes/nav/steps-charts.rst

   .. include:: /includes/nav/steps-embedding.rst
      
   .. include:: /includes/nav/steps-auth-settings.rst
      
   .. step:: Add the authentication provider.
      
      a. From the :guilabel:`Authentication providers` section, click 
         :guilabel:`Add`.

      #. In the :guilabel:`Name` field, enter a descriptive name for 
         the provider.

      #. From the :guilabel:`Provider` list, select the type of 
         provider you want to add.

      #. Configure |charts-short| to verify tokens from the provider.
      
         The values you must enter differ based on the provider you 
         selected:
      
         - **Google**
         
           In the :guilabel:`Client ID` field, enter your application's 
           Google API Client ID, in the following format:
  
           .. code-block:: none
  
              <prefix>.apps.googleusercontent.com

         - **Custom JWT**
      
           Provide the following values:
  
           .. include:: /includes/list-table-jwt-auth-provider-options.rst
      
      #. Click :guilabel:`Save`.
