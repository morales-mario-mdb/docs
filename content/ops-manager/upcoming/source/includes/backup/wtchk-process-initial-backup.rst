.. include:: /images/backup-flow-wt.rst

1. When the cluster is ready for its scheduled snapshot, it determines
   an optimal available node to take the snapshot. In most cases, the
   |mongod| determines lowest priority secondary member as the
   preferred snapshot node. Other metrics can factor into determining
   the preferred node, such as how current the secondary is with the
   primary and the previously chosen snapshot's member.

#. Once the node is selected as the backup source host, the backup 
   process opens a ``$backupCursor`` on the targeted node.

   The ``$backupCursor``, a storage engine layer mechanism, allows the
   database files in storage to be copied in a consistent state while
   still accepting writes.

#. The {+mdbagent+} Backup function copies and processes these data
   files.

#. The {+mdbagent+} Backup function sends the data files to |mms|.

#. The backup process collects and transfers these files to the
   snapshot store that you choose to store your backup. Depending upon
   which snapshot store you chose to store your snapshot, a snapshot
   can be written out as:

   a. Blocks to a :term:`blockstore <backup blockstore database>`.
      Binary chunks written to a MongoDB database on the |mms| host.

   #. Blocks to an :opsmgr:`AWS S3 bucket  </reference/glossary/#std-term-S3-Snapshot-Store>`. The
      metadata for those blocks is written to a MongoDB database on the
      |onprem| host.

   #. Snapshot files to a :opsmgr:`file system store </reference/glossary/#std-term-File-System-Store>`. 
      The :opsmgr:`Backup Daemon </reference/glossary/#std-term-Backup-Daemon>` that owns the backup 
      job for the replica creates a full snapshot by combining the changed and the new blocks with the 
      unchanged blocks from the last snapshot. If the Backup Daemon that owns the backup job is 
      down, you need to recover the Backup Daemon or 
      :ref:`move the head database to another Daemon <move-jobs-from-one-daemon-to-another>`.

.. note::

   To learn more about the characteristics of each storage method, see
   :ref:`backup-configuration-options`.
