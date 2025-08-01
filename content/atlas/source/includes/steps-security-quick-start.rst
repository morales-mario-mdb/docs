.. procedure::
   :style: normal

   .. step:: Go to the :guilabel:`Quickstart` page.

      In the :guilabel:`Security` section of the left navigation, click
      :guilabel:`Quickstart`. If :guilabel:`Quickstart` isn't available in 
      your UI left navigation, add :guilabel:`Quickstart` to your UI:
      
      a. .. include:: /includes/nav/list-project-settings.rst

      #. Toggle :guilabel:`Atlas Security Quickstart` to :guilabel:`On`.
      
   .. step:: Specify how you would like to authenticate the connection to your |service| cluster.

      In the :guilabel:`How would you like to authenticate your 
      connection?` section of the :guilabel:`Quickstart` page, you can 
      configure one of the following options for your cluster. 
      
      .. tabs:: 
      
         .. tab:: Username and Password
            :tabid: pwd
      
            a. Click :guilabel:`Username and Password`. 

            #. Set the new user's :guilabel:`Username` and 
               :guilabel:`Password`.
      
               .. note::
      
                  If you use special characters in your password, you must
                  escape them in the connection string that you use to 
                  connect to your cluster. To learn more, 
                  see :ref:`special-pass-characters`.
      
               You can't change a username after you create the user. You 
               can click the :guilabel:`Edit` button to edit the password.
      
            #. Click :guilabel:`Create User`.
      
         .. tab:: Certificate 
            :tabid: cert
      
            a. Click :guilabel:`Certificate`. MongoDB uses X.509 
               certificates for passwordless authentication.

            #. Specify the Common Name (CN) for the new user.

            #. *Optional*. Toggle the :guilabel:`Download certificate 
               when user is added` to :guilabel:`On` to download the 
               certificate after creating the user. 
      
               If you choose to download the certificate, you must also 
               specify certificate expiration. To specify the duration, 
               choose the duration for the certificate from 
               the dropdown. You can set the certificate expiration to 
               ``3``, ``6``, ``12``, or ``24`` months.

            #. Click :guilabel:`Add User`. 
      
               The new user is granted :authrole:`Project Data Access Read/Write` role by default.
      
      .. seealso:: 
      
         - :ref:`mongodb-users`
         - :ref:`self-managed-x509`
      
   .. step:: Specify from where you would like to connect to your |service| cluster.

      You can enable access for any network that needs to read and write 
      data to your cluster. To enable access, you can configure access from 
      your local environment or the cloud environment for your cluster.
      
      .. tabs:: 
      
         .. tab:: Local Environment
            :tabid: local 
      
            a. Choose :guilabel:`My Local Environment` to add network IP 
               addresses to the project IP Access List. |service| allows 
               only client connections to the {+database-deployment+} from 
               entries in the project's IP access list. You can modify the 
               IP addresses in the access list at any time.

            #. Enter the IP address and a description to associate with the 
               IP address in the :guilabel:`IP Address` and 
               :guilabel:`Description` fields respectively, or click 
               :guilabel:`Add My Current IP Address`.
      
               You can specify either a single IP address or a CIDR-notated 
               range of addresses.

            #. Click :guilabel:`Add Entry`.
      
         .. tab:: Cloud Environment
            :tabid: cloud
      
            .. note:: 
      
               Network Peering and Private Endpoint are available only for 
               ``M10`` or higher cluster. 
      
            a. Choose :guilabel:`Cloud Environment` to configure network 
               access between |service| and your cloud or on-premises 
               environment.

            #. Enter the IP address and a description to associate with the 
               IP address in the :guilabel:`IP Address` and 
               :guilabel:`Description` fields respectively, or click 
               :guilabel:`Add My Current IP Address`.
      
               You can specify either a single IP address or a CIDR-notated 
               range of addresses.

            #. Click :guilabel:`Add Entry`.

            #. *Optional*. For ``M10`` and higher clusters, you can set up 
               |vpc| peering and private endpoint by clicking the 
               corresponding :guilabel:`Configure in New Tab` button.
      
               To learn more about setting up: 
      
               - |vpc| Peering connection, see :ref:`vpc-peering`.
               - Private endpoint, see :ref:`private-endpoint`.
      
      .. seealso:: 
      
         - :ref:`access-list`
         - :ref:`vpc-peering`
         - :ref:`private-endpoint`
      
   .. step:: Click :guilabel:`Finish and Close`.

      Once you have completed setting up database and network access for 
      the first cluster in your project, |service| disables access to 
      :guilabel:`Quickstart`. You can enable it to revisit these 
      configurations from a consolidated page.
      
      A dialog box displays prompting you to specify whether you wish to see 
      the :guilabel:`Quickstart` page in your navigation. You can select 
      or deselect the :guilabel:`Hide Quickstart guide in the navigation` 
      checkbox to hide or add :guilabel:`Quickstart` to your navigation.
      
      Alternatively, you can use the following steps to hide or add 
      :guilabel:`Quickstart` to your navigation: 
      
      a. .. include:: /includes/nav/list-project-settings.rst

      #. Toggle :guilabel:`Atlas Security Quickstart` to 
         :guilabel:`Off` or :guilabel:`On` respectively.
      
   .. step:: Click :guilabel:`Go to Database` to view your database deployments.
