.. procedure::
   :style: normal
      
   .. include:: /includes/nav/steps-project-alerts.rst
      
   .. step:: Choose whether to create a new alert setting or clone an existing one.

      To create a new alert without cloning an existing setting:
      
      a. Click :guilabel:`Add`.
      #. Select :guilabel:`New Alert`.
      
      To clone an existing alert setting:
      
      a. Click the :guilabel:`Alert Settings` tab.
      #. Locate the alert setting you want to clone.
      #. Click :icon:`ellipsis-h` then :guilabel:`Clone` in that alert
         setting's row.
      
   .. step:: Select the condition that triggers the alert.

      In the :guilabel:`Alert if` section, select the target component and
      the condition. To learn more about alert conditions, see
      :doc:`/reference/alert-types`.
      
   .. step:: Apply the alert only to specific targets.

      If the options in the :guilabel:`For` section are available, you can
      optionally filter the alert to apply only to a subset of the targets. 
      The filter uses a logical ``OR`` operator between each condition.
      
      The :guilabel:`matches` field can use regular expressions.
      
   .. step:: Select the alert recipients and delivery methods.
      
      In the :guilabel:`Send to` section:
      
      a. (Optional) To help reduce the false positives that |mms| 
         sends, in the :guilabel:`send if condition lasts 
         at least` field, specify the minutes to elapse before the 
         condition sends the alert. The next alert check that runs after
         the specified time elapses sends the alert.
         
      #. (Optional) In the :guilabel:`resend after` field, specify the 
         minutes to elapse before the condition resends the alert.
      
      #. Click :guilabel:`Add` and select
         from the options described in the following table.
      
         .. include:: /includes/list-table-alert-notification-methods-project-only.rst
      
   .. step:: Click :guilabel:`Save`.
