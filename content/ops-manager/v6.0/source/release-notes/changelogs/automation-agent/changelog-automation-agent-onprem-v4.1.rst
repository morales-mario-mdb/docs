.. _automation-6.4.0.5657:

Automation Agent 6.4.0.5657
---------------------------

:ref:`Released with Ops Manager 4.1.4 on 2019-03-28 <opsmgr-server-4.1.4>`

- Various improvements to logging.

.. _automation-6.3.0.5643:

Automation Agent 6.3.0.5643
---------------------------

:ref:`Released with Ops Manager 4.1.3 on 2019-03-07 <opsmgr-server-4.1.3>`

- No longer runs the metrics collection during restores, resulting
  in cleaner log files.
- Improved error handling during restores for better resumability.

.. _automation-6.2.0.5620-1:

Automation Agent 6.2.0.5620-1
-----------------------------

:ref:`Released with Ops Manager 4.1.2 on 2019-02-21 <opsmgr-server-4.1.2>`

- Fix rotation of log files when MongoDB log rotation is enabled and
  the maximum number of uncompressed log files is set to two.

.. _automation-6.1.0.5603:

Automation Agent 6.1.0.5603
---------------------------

:ref:`Released with Ops Manager 4.1.1 on 2019-01-31 <opsmgr-server-4.1.1>`

- Built with Go 1.10.
- Significant reduction in memory footprint when managing 
  sharded clusters.
- **Fix:** Allow successful conversion of MongoDB storageEngine for 
  a standalone with |tls-ssl| enabled.

.. _automation-5.9.1.5566:

Automation Agent Version 5.9.1.5566
-----------------------------------

:ref:`Released with Ops Manager 4.1.0 on 2018-12-13 <opsmgr-server-4.1.0>`

- Improves performance for management of clusters deployed in
  environments with high latency between members.
- Improves performance when computing plans.
