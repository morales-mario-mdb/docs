.. procedure::
   :style: normal
      
   .. step:: Log in to the |application|.
      
   .. step:: Begin or Manage a Deployment.
      
      Your project has no deployments and you see a prompt to get
      started.
      
      .. tabs::
         :hidden:
      
         .. tab:: Build New
            :tabid: buildNew
      
            a. From the :guilabel:`Build New Deployment` menu,
               select the type of deployment you wish to add:
      
               - :doc:`New Sharded Cluster </tutorial/deploy-sharded-cluster>`
               - :doc:`New Replica Set </tutorial/deploy-replica-set>`
               - :doc:`New Standalone </tutorial/deploy-standalone>`
      
            b. If, on the :guilabel:`Create New Deployment`
               page, |mms| cannot detect any hosts with the
               MongoDB Agent installed, you see a banner
               displayed at the top of the
               :guilabel:`Create New Deployment` page.
      
               Click the :guilabel:`see instructions` link.
      
            c. From the :guilabel:`Select Your Server's
               Operating System` menu, click {+agent-dl-msi-windows+}.
      
            d. Click :guilabel:`Next`.
      
         .. tab:: Manage Existing
            :tabid: manageExisting
      
            a. Click :doc:`Manage your existing deployment </tutorial/add-existing-mongodb-processes>`.
      
            b. From the :guilabel:`Install Agent` menu, click {+agent-dl-msi-windows+}.
      
   .. step:: Download the {+mdbagent+}.
      
      The :guilabel:`{+mdbagent+} Installation Instructions` box
      displays the following information:
      
      - :guilabel:`Project ID`
        (Required for binding to a project)
      
      - :guilabel:`API Key`
      
        If you do not have an API Key, click :icon-fa5:`plus`
        :ref:`Generate Key <generate-agent-api-key>`.
      
      Some or all of these values are required in a later step. Copy these
      values then store them where you can access them later.
      
   .. step:: Install the {+mdbagent+}.
      
      .. tabs::
      
         tabs:
           - id: interactive
             name: Interactive
             content: |
      
               a. After the ``MSI`` downloads, double-click:
      
                  :file:`mongodb-mms-automation-agent-<VERSION>.windows_x86_64.msi`
      
               #. If a security warning appears, click :guilabel:`Run`.
      
               #. At the :guilabel:`Configuration/Log Folder` step
      
                  Provide the directory into which these files are saved.
      
               #. At the :guilabel:`Key Type` step, select :guilabel:`Agent
                  API Key` to bind to a specific :cloudmgr:`project </reference/glossary/#std-term-project>`.
      
               #. Enter the appropriate agent keys.
      
                  .. note::
      
                     These keys are provided in the :guilabel:`MongoDB
                     Agent Installation Instructions` modal described in
                     the previous step.
      
                  - Type your Project ID into the :guilabel:`Project ID`
                    field.
      
                  - Type your Agent API Key into the
                    :guilabel:`Agent API Key` field.
      
               #. At the :guilabel:`MongoDB Paths` step, specify the Log
                  and Backup directories
      
               #. At the :guilabel:`Windows Firewall Configuration` step,
                  click your preferred firewall configuration.
      
                  If you click :guilabel:`Configure firewall rules allowing
                  access from only the specified |ipaddr| addresses.`, type
                  the necessary |ipv4| addresses into the provided box.
      
               #. (Conditional) Windows enables `Stealth Mode <https://technet.microsoft.com/en-us/library/dd448557(v=ws.10).aspx>`__
                  for the Windows Firewall by default. If you have not
                  disabled it on the MongoDB host on which you are
                  installing the {+mdbagent+}, you are asked to disable
                  it. Stealth Mode significantly degrades the performance
                  and capability of the {+mdbagent+}. Click
                  :guilabel:`Disable Stealth Mode`.
      
               #. (Conditional) Windows does not enable `Disk Performance Counters <https://blogs.technet.microsoft.com/askcore/2012/03/16/windows-performance-monitor-disk-counters-explained/>`__
                  by default. If you have not enabled Disk Performance
                  Counters for the MongoDB host, click :guilabel:`Enable
                  Disk Performance Counters`. The {+mdbagent+}
                  uses these counters for some of its hardware monitoring
                  activities.
      
               #. Click :guilabel:`Install`.
      
               #. Click :guilabel:`Finish` once setup is complete.
      
           - id: unattended
             name: Unattended
             content: |
      
               After the ``MSI`` downloads, you can run an unattended
               install. You run an unattended install from the command line
               in either the command interpreter or PowerShell. To learn
               more about unattended installs, see Microsoft's
               documentation on `Standard Installer Command-Line Options
               <https://docs.microsoft.com/en-us/windows/desktop/msi/standard-installer-command-line-options>`__
      
               To run the ``MSI`` installer unattended from the command
               line, you invoke ``msiexec.exe`` with the ``/q`` and ``/i``
               flags and a combination of required and optional
               parameters:
      
               .. list-table::
                  :widths: 20 15 65
                  :header-rows: 1
      
                  * - Parameter
                    - Necessity
                    - Value
      
                  * - ``MMSAPIKEY``
                    - Required
                    - Agent |api| key of your |mms| project.
                  * - ``MMSGROUPID``
                    - Required
                    - Unique Identifier of your |mms| project.
                  * - ``CONFIGLOGDIR``
                    - Optional
                    - Absolute file path to which |mms| should write the
                      {+mdbagent+} configuration file.
                  * - ``LOGFILE``
                    - Optional
                    - Absolute file path to which |mms| should write the
                      {+mdbagent+} log
                  * - ``MMSCONFIGBACKUP``
                    - Optional
                    - Absolute file path to the |mms| automation
                      configuration backup |json| file.
      
               .. example::
      
                  To install the {+mdbagent+} unattended, you would
                  invoke ``msiexec.exe`` with the following options:
      
                  .. code-block:: powershell
      
                     msiexec.exe /q /i "C:\PATH\TO\mongodb-mms-automation-agent-<VERSION>.windows_x86_64.msi" MMSGROUPID=<GROUP.ID> MMSAPIKEY=<AGENT.API.ID> MMSBASEURL="<http://opsmanager.example.com:8080>" LOGFILE="C:\MMSData\Server\Log\automation-agent.log" MMSCONFIGBACKUP="C:\MMSData\MongoDB\mms-cluster-config-backup.json"
      
   .. step:: Finish the installation of the MongoDB Agent.
      In the :guilabel:`Install Agent Instructions` modal:
      
      a. Click :guilabel:`Verify Agent` to make
         sure the MongoDB Agent can connect to |mms|.
      
      b. Click :guilabel:`Done`.
      
   .. step:: (Optional) Change the location of the {+mdbagent+} binaries and configuration backup files.
      
      By default, the MongoDB binaries and |mms| configuration backup
      file are located in ``%SystemDrive%\MMSMongoDB\versions``.
      
      .. note::
      
         Windows sets the ``%SystemDrive%`` environment variable to the
         drive on which you installed Windows. By default, you would be
         directed to install Windows on the ``C:`` drive. To find your
         ``%SystemDrive%``, issue with following command from `PowerShell
         <https://msdn.microsoft.com /en-us/powershell/>`__:
      
         .. code-block:: ps1
      
            get-childitem env:SystemDrive
      
      If you want to store these files in a different directory, follow
      these procedures:
      
      **To change the location of the {+mdbagent+} Binaries**
      
      a. .. include:: /includes/nav/list-deployment.rst
         
      #. .. include:: /includes/nav/list-agents.rst
         
      #. Click the :guilabel:`Downloads & Settings` tab.
      
      #. Below the :guilabel:`Download Directory` heading, click
         :icon-mms:`edit` to the right of the path shown in
         :guilabel:`Download Directory (Windows)`.
      
      #. Change the path to the new path you want.
      
      #. Click :guilabel:`Save`.
      
      #. Create the new directory you specified on each host that runs
         an {+mdbagent+}. Use Windows Explorer to move the file or
         issue the following command from a Command Prompt or
         `PowerShell <https://msdn.microsoft.com/en-us/powershell/>`__:
      
         .. code-block:: ps1
      
            md \<newPath>
      
         .. important::
      
            Make sure the system user that runs the {+mdbagent+} can write
            to this new directory. This is usually the ``SYSTEM`` user,
            which requires no additional configuration unless you changed
            the user.
      
      **To change the location of the {+mdbagent+} configuration backup**
      
      a. Open the :ref:`{+mdbagent+} configuration file
         <automation-agent-config-file-location>` in your preferred text
         editor.
      
      #. Change the :setting:`mmsConfigBackup` setting to the new path
         for the configuration backup file. Replace ``X`` with the drive
         letter on which your backup is stored.
      
         .. code-block:: ini
      
            mmsConfigBackup=X:\<newPath>\mms-cluster-config-backup.json
      
      #. Save the {+mdbagent+} configuration file.
      
      #. Move the configuration backup file to the new directory. Use
         Windows Explorer to move the file or issue the following
         command from a Command Prompt or `PowerShell <https://msdn.microsoft.com/en-us/powershell/>`__:
      
         .. code-block:: ps1
      
            move %SystemDrive%\MMSMongoDB\versions\mms-cluster-config-backup.json \<newPath>
      
   .. step:: Repeat the installation procedure for each MongoDB host.
