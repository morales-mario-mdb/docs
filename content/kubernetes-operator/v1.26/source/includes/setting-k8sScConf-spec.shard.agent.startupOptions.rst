.. setting:: spec.shard.agent.startupOptions

   *Type*: collection

   
   {+mdbagent+} settings with which you want to start each :manual:`sharded cluster </reference/glossary/#std-term-sharded-cluster>` shard member.
   
   You must provide {+mdbagent+} settings as key-value pairs. The values
   must be strings.
   
   For a list of supported {+mdbagent+} settings, see:
   
   - :cloudmgr:`MongoDB Agent Settings </reference/mongodb-agent-settings/>`
     for |cloud-short| projects.
   - :opsmgr:`MongoDB Agent Settings
     </reference/mongodb-agent-settings/>` for the |onprem| version you
     deployed with the |k8s-op-short|. 
   
   
   .. literalinclude:: /includes/code-examples/yaml-files/example-sharded-agent-settings.yaml
      :language: yaml
      :linenos:
      :emphasize-lines: 28-31
   

