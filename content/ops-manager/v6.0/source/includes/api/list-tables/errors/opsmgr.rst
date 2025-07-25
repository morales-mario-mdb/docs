.. list-table::
   :header-rows: 1
   :widths: 60 8 30

   * - Error
     - HTTP Code
     - Description

   * - .. apierror:: ACKNOWLEDGEMENT_COMMENT_TOO_LONG
     - `400`_
     - Acknowledgement comment too long. It must not exceed
       ``<number>`` characters.

   * - .. apierror:: ADDRESS_ALREADY_IN_ACCESS_LIST
     - `409`_
     - The address ``<address>`` is already on the access list.

   * - .. apierror:: ALERT_CONFIG_NOT_FOUND
     - `404`_
     - No alert configuration with ID ``<ID>`` exists in group
       ``<group>``.

   * - .. apierror:: ALERT_NOT_FOUND
     - `404`_
     - No alert with ID ``<ID>`` exists in group ``<group>``.

   * - .. apierror:: API_KEY_CANNOT_CREATE_GROUP
     - `401`_
     - API Keys cannot create :doc:`groups
       </tutorial/manage-projects>`.

   * - .. apierror:: API_KEY_CANNOT_CREATE_ORG
     - `401`_
     - API Keys cannot create :doc:`organizations
       </tutorial/manage-organizations>`.

   * - .. apierror:: API_KEY_NOT_FOUND
     - `400`_
     - No API Key with ID {API-KEY-ID} exists.

   * - .. apierror:: API_KEY_ACCESS_LIST_ACCESS_DENIED
     - `400`_
     - API Key access lists are only accessible by the API Key or by
       a user administrator.

   * - .. apierror:: API_KEY_ACCESS_LIST_NOT_FOUND
     - `404`_
     - The specified IP address does not exist in the
       corresponding API key access list.

   * - .. apierror:: ATTRIBUTE_NEGATIVE_OR_ZERO
     - `400`_
     - The attribute ``<attribute>`` cannot be negative or zero.

   * - .. apierror:: ATTRIBUTE_NEGATIVE
     - `400`_
     - The attribute ``<attribute>`` cannot be negative.

   * - .. apierror:: ATTRIBUTE_READ_ONLY
     - `400`_
     - The attribute ``<attribute>`` is read-only and cannot be
       changed by the user.

   * - .. apierror:: AUTH_MECHANISM_REQUIRES_SSL
     - `400`_
     - Authentication mechanism ``<mechanism>`` requires SSL.

   * - .. apierror:: AUTOMATION_CONFIG_CONCURRENT_MODIFICATION
     - `409`_
     - Another session or user already published changes.

   * - .. apierror:: AUTOMATION_CONFIG_NOT_FOUND
     - `404`_
     - No automation configuration exists for group ``<group>``.

   * - .. apierror:: BACKUP_CONFIG_NOT_FOUND
     - `404`_

     - No backup configuration exists for cluster ``<cluster>`` in
       group ``<group>``.

   * - .. apierror:: BAD_USERNAME_IN_GROUP_REF
     - `400`_
     - User ``<username>`` is not in group ``<group>``.

   * - .. apierror:: BAD_USERNAME_REF
     - `400`_
     - No user with username ``<username>`` exists.

   * - .. apierror:: BAD_ACCESS_LIST_ADD_REQUEST
     - `400`_
     - Should not specify both the IP address and the CIDR block.

   * - .. apierror:: BILLING_UNSUPPORTED
     - `401`_
     - Billing administrator roles are not supported by Ops Manager.

   * - .. apierror:: BLOCKED_USERNAME
     - `400`_
     - The specified username ``<username>`` is not allowed.

   * - .. apierror:: CANNOT_ADD_GLOBAL_ROLE
     - `403`_
     - Adding a global role is not supported.

   * - .. apierror:: CANNOT_CHANGE_GROUP_NAME
     - `403`_
     - Current user is not authorized to change group name.

   * - .. apierror:: CANNOT_CLOSE_ACCOUNT_ACTIVE_BACKUP
     - `409`_
     - Cannot close account while the group has active backups;
       please terminate all backups.

   * - .. apierror:: CANNOT_CLOSE_ACCOUNT_FAILED_INVOICES
     - `402`_
     - Cannot close account because there are failed invoices.

   * - .. apierror:: CANNOT_DELETE_FROM_CLUSTER_SNAPSHOT
     - `403`_
     - Cannot individually delete a snapshot that is part of a
       cluster snapshot.

   * - .. apierror:: CANNOT_DELETE_LAST_OWNER
     - `403`_
     - Cannot remove the last owner from the group. If you are
       trying to close the group by removing all users, please
       delete the group instead.

   * - .. apierror:: CANNOT_DEMOTE_LAST_ORG_OWNER
     - `403`_
     - Cannot demote the last owner of the organization.

   * - .. apierror:: CANNOT_DEMOTE_LAST_OWNER
     - `403`_
     - Cannot demote the last owner of the group.

   * - .. apierror:: CANNOT_DOWNLOAD_EXPIRED_JOB
     - `403`_
     - Cannot download a log collection request job in the
       ``EXPIRED`` state.

   * - .. apierror:: CANNOT_DOWNLOAD_JOB_IN_PROGRESS
     - `403`_
     - Cannot download a log collection request job in the
       ``IN_PROGRESS`` state.

   * - .. apierror:: CANNOT_EXTEND_EXPIRED_JOB
     - `403`_
     - Cannot extend duration of logs that have already expired.

   * - .. apierror:: CANNOT_GET_BACKUP_CONFIG_INVALID_STATE
     - `409`_

     - Cannot get backup configuration without cluster being
       monitored.

   * - .. apierror:: CANNOT_MODIFY_MANAGED_HOST
     - `403`_
     - Cannot modify host ``<host>`` because it is managed by
       Automation.

   * - .. apierror:: CANNOT_MODIFY_SHARD_BACKUP_CONFIG
     - `409`_
     - Cannot modify backup configuration for individual shard; use
       cluster ID ``<ID>`` for entire cluster.

   * - .. apierror:: CANNOT_REMOVE_CALLER_FROM_ACCESS_LIST
     - `400`_
     - Cannot remove caller's IP address ``<address>`` from
       access list.

   * - .. apierror:: CANNOT_SET_BACKUP_AUTH_FOR_MANAGED_CLUSTER
     - `409`_
     - Username and password cannot be manually set for a managed
       cluster.

   * - .. apierror:: CANNOT_SET_CLUSTER_CHECKPOINT_INTERVAL_FOR_REPLICA_SET
     - `400`_
     - Cluster checkpoint interval can only be set for sharded
       clusters, not replica sets.

   * - .. apierror:: CANNOT_SET_CREDENTIALS_FOR_AUTH_MECHANISM
     - `400`_
     - Username and password fields are only supported for
       authentication mechanism ``MONGODB_CR`` or ``PLAIN``.

   * - .. apierror:: CANNOT_SET_PASSWORD_FOR_AUTH_MECHANISM
     - `400`_
     - Cannot change password unless authentication mechanism is
       ``MONGODB_CR`` or ``PLAIN``.

   * - .. apierror:: CANNOT_SET_POINT_IN_TIME_WINDOW
     - `400`_
     - Setting the point in time window is not allowed.

   * - .. apierror:: CANNOT_SET_REF_TIME_OF_DAY
     - `400`_
     - Setting the reference point time of day is not allowed.

   * - .. apierror:: CANNOT_START_BACKUP_INVALID_STATE
     - `409`_
     - Cannot start backup unless the cluster is in the ``INACTIVE``
       or ``STOPPED`` state.

   * - .. apierror:: CANNOT_START_RESTORE_JOB_FOR_DELETED_CLUSTER_SNAPSHOT
     - `409`_
     - Cannot start restore job for deleted cluster snapshot.

   * - .. apierror:: CANNOT_START_RESTORE_JOB_FOR_DELETED_SNAPSHOT
     - `409`_
     - Cannot start restore job for deleted snapshot.

   * - .. apierror:: CANNOT_START_RESTORE_JOB_FOR_INCOMPLETE_CLUSTER_SNAPSHOT
     - `409`_
     - Cannot start restore job for incomplete cluster snapshot.

   * - .. apierror:: CANNOT_STOP_BACKUP_INVALID_STATE
     - `409`_
     - Cannot stop backup unless the cluster is in the STARTED
       state.

   * - .. apierror:: CANNOT_TERMINATE_BACKUP_INVALID_STATE
     - `409`_
     - Cannot terminate backup unless the cluster is in the
       ``STOPPED`` state.

   * - .. apierror:: CHECKPOINT_NOT_FOUND
     - `404`_
     - No checkpoint with ID ``<ID>`` exists for cluster
       ``<cluster>``.

   * - .. apierror:: CLUSTER_NOT_FOUND
     - `404`_
     - No cluster with ID ``<ID>`` exists in group ``<group>``.

   * - .. apierror:: CONFIG_RESTORE_JOB_NOT_FOUND
     - `404`_
     - No restore job with ID ``<ID>`` exists for config server
       ``<config server>``.

   * - .. apierror:: CONFIG_SNAPSHOT_NOT_FOUND
     - `404`_
     - No snapshot with ID ``<ID>`` exists for config server
       ``<config server>``.

   * - .. apierror:: DATABASE_NAME_REQUIRED
     - `400`_
     - Metric ``<metric>`` requires a database name to be provided.

   * - .. apierror:: DATABASE_NOT_FOUND
     - `404`_
     - No database with name ``<name>`` exists on host ``<host>``.

   * - .. apierror:: DEVICE_NAME_REQUIRED
     - `400`_
     - Metric ``<metric>`` requires a device name to be provided.

   * - .. apierror:: DEVICE_NOT_FOUND
     - `404`_
     - No device with name ``<name>`` exists on host ``<host>``.

   * - .. apierror:: DISALLOWED_ATTRIBUTE_TURN_ON_LDAP
     - `400`_
     - Attribute ``<attribute>`` not allowed. To enable it, change
       authentication to LDAP in Ops Manager Config.

   * - .. apierror:: DUPLICATE_ADDRESSES_IN_INPUT
     - `400`_
     - Two or more of the IP addresses being added to the access list
       are the same.

   * - .. apierror:: DUPLICATE_ROLE_ENTRY_IN_LDAP_MAPPING
     - `400`_
     - Each role name can only appear in one entry. ``<Entry>`` was
       used more than once.

   * - .. apierror:: EMAIL_OR_SMS_REQUIRED_FOR_GROUP_NOTIFICATION
     - `400`_
     - Email and/or SMS must be enabled for group notifications.

   * - .. apierror:: EMAIL_OR_SMS_REQUIRED_FOR_USER_NOTIFICATION
     - `400`_
     - Email and/or SMS must be enabled for user notifications.

   * - .. apierror:: EXPIRATION_DATE_MUST_BE_IN_FUTURE
     - `400`_
     - Expiration date for log collection request job must be in
       the future.

   * - .. apierror:: EXPIRATION_DATE_TOO_DISTANT
     - `400`_
     - Expiration date for log collection request job can only be as
       far as 6 months in the future.

   * - .. apierror:: FEATURE_UNSUPPORTED
     - `403`_
     - Feature not supported by current account level.

   * - .. apierror:: FRACTIONAL_TIMESTAMP
     - `400`_
     - Timestamp must be whole number of seconds.

   * - .. apierror:: GLOBAL_ALERT_CONFIG_NOT_FOUND
     - `404`_
     - No global alert configuration with ID ``<ID>`` exists.

   * - .. apierror:: GLOBAL_ALERTS_ONLY
     - `400`_
     - The specified event type ``<type>`` can only be used for
       global alerts.

   * - .. apierror:: GROUP_ALREADY_EXISTS
     - `409`_
     - A group with name ``<name>`` already exists.

   * - .. apierror:: GROUP_API_KEY_NOT_FOUND
     - `404`_
     - No group with API key ``<key>`` exists.

   * - .. apierror:: GROUP_MISMATCH
     - `400`_
     - The specified group ID ``<ID>`` does not match the URL.

   * - .. apierror:: GROUP_NAME_NOT_FOUND
     - `404`_
     - No group with name ``<name>`` exists.

   * - .. apierror:: GROUP_NOT_FOUND
     - `404`_
     - No group with ID ``<ID>`` exists.

   * - .. apierror:: HOST_LAST_PING_NOT_FOUND
     - `404`_
     - No last ping exists for host ``<host>`` in group ``<group>``.

   * - .. apierror:: HOST_NOT_FOUND
     - `404`_
     - No host with ID ``<ID>`` exists in group ``<group>``.

   * - .. apierror:: HOSTNAME_AND_PORT_NOT_FOUND
     - `404`_
     - No host with hostname and port ``<name:port>`` exists in
       group ``<group>``.

   * - .. apierror:: INCORRECT_SNMP_PORT
     - `400`_
     - SNMP address must be on port 162.

   * - .. apierror:: INVALID_AGENT_TYPE_NAME
     - `400`_
     - An invalid agent type name ``<name>`` was specified.

   * - .. apierror:: INVALID_ALERT_CONFIG_ID
     - `404`_
     - An invalid alert configuration ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_ALERT_ID
     - `404`_
     - An invalid alert ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_ALERT_STATUS
     - `400`_
     - An invalid alert status ``<status>`` was specified.

   * - .. apierror:: INVALID_ATTRIBUTE
     - `400`_
     - Invalid attribute ``<attribute>`` specified.

   * - .. apierror:: INVALID_AUTH_MECHANISM
     - `400`_
     - Invalid authentication mechanism ``<mechanism>``.

   * - .. apierror:: INVALID_AUTH_TYPE_NAME
     - `400`_
     - An invalid authentication type name ``<name>`` was specified.

   * - .. apierror:: INVALID_CHECKPOINT_ID
     - `404`_
     - An invalid checkpoint ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_CLUSTER_CHECKPOINT_INTERVAL
     - `400`_
     - Cluster checkpoint interval must be 15, 30, or 60 minutes.

   * - .. apierror:: INVALID_CLUSTER_ID
     - `404`_
     - An invalid cluster ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_DAILY_SNAPSHOT_RETENTION_PERIOD
     - `400`_
     - Daily snapshot retention period must be between 1 and 365
       days.

   * - .. apierror:: INVALID_DIRECTORY
     - `400`_
     - An invalid directory name ``<name>`` was specified.

   * - .. apierror:: INVALID_EMAIL_ADDRESS
     - `400`_
     - An invalid email address was specified.

   * - .. apierror:: INVALID_ENUM_VALUE
     - `400`_
     - An invalid enumeration value ``<value>`` was specified.

   * - .. apierror:: INVALID_EVENT_TYPE_FOR_ALERT
     - `400`_
     - Event type ``<type>`` not supported for alerts.

   * - .. apierror:: INVALID_FILTERLIST
     - `400`_
     - Backup configuration cannot specify both included namespaces
       and excluded namespaces.

   * - .. apierror:: INVALID_GRANULARITY
     - `400`_
     - An invalid granularity ``<granularity>`` was specified.

   * - .. apierror:: INVALID_GROUP_ID
     - `404`_
     - An invalid group ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_GROUP_NAME_10GEN
     - `400`_
     - Group name cannot contain "10gen-" or "-10gen".

   * - .. apierror:: INVALID_GROUP_NAME
     - `400`_
     - An invalid group name ``<name>`` was specified.

   * - .. apierror:: INVALID_GROUP_TOKEN
     - `400`_
     - A group tag must be a string (alphanumeric, periods,
       underscores, and dashes) of length ``<MAX_TAG_LENGTH>``
       characters or less.

   * - .. apierror:: INVALID_HOST_PORT
     - `400`_
     - Invalid host port ``<number>``.

   * - .. apierror:: INVALID_HOSTNAME_PREFIX
     - `400`_
     - Invalid hostname prefix ``<prefix>``. It must contain only

       alphanumeric characters and hyphens, may not begin or end
       with a hyphen ("-"), and must not be more than 63 characters
       long.

   * - .. apierror:: INVALID_HOSTNAME
     - `400`_
     - Invalid hostname ``<name>``.

   * - .. apierror:: INVALID_JOB_ID
     - `404`_
     - An invalid restore job ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_JSON_ATTRIBUTE
     - `400`_
     - Received JSON for the ``<attribute>`` attribute does not
       match expected format.

   * - .. apierror:: INVALID_JSON
     - `400`_
     - Received JSON does not match expected format.

   * - .. apierror:: INVALID_KEY_ID
     - `404`_
     - An invalid key ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_LOG_REQUEST_SIZE
     - `400`_
     - Log request size must be a positive number.

   * - .. apierror:: INVALID_MACHINE_ID
     - `404`_
     - An invalid machine ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_MACHINE_IMAGE
     - `400`_
     - The specified machine image is invalid.

   * - .. apierror:: INVALID_METRIC_NAME
     - `404`_
     - An invalid metric name ``<name>`` was specified.

   * - .. apierror:: INVALID_MONGODB_USERNAME
     - `400`_
     - The username ``<username>`` is not a valid MongoDB login.

   * - .. apierror:: INVALID_MONITORING_STATE
     - `409`_
     - Monitoring data for this process is not available.

   * - .. apierror:: INVALID_MONTHLY_SNAPSHOT_RETENTION_PERIOD
     - `400`_
     - Monthly snapshot retention period must be between 1 and 36
       months.

   * - .. apierror:: INVALID_OPERATOR_FOR_EVENT_TYPE
     - `400`_
     - Operator ``<operator>`` is not compatible with event type
       ``<type>``.

   * - .. apierror:: INVALID_PERIOD
     - `400`_
     - An invalid period was specified.

   * - .. apierror:: INVALID_QUERY_PARAMETER
     - `400`_
     - Invalid query parameter ``<parameter>`` specified.

   * - .. apierror:: INVALID_REFERENCE_HOUR_OF_DAY
     - `400`_
     - Snapshot schedule reference hour must be between 0 and 23,
       inclusive.

   * - .. apierror:: INVALID_REFERENCE_MINUTE_OF_HOUR
     - `400`_
     - Snapshot schedule reference minute must be between 0 and 59,
       inclusive.

   * - .. apierror:: INVALID_REFERENCE_TIMEZONE_OFFSET
     - `400`_
     - Snapshot schedule timezone offset must conform to ISO-8601
       time offset format, such as "+0000".

   * - .. apierror:: INVALID_ROLE_FOR_GROUP
     - `400`_
     - Role ``<role>`` is invalid for group ``<group>``.

   * - .. apierror:: INVALID_SNAPSHOT_ID
     - `404`_
     - An invalid snapshot ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_SNAPSHOT_INTERVAL
     - `400`_
     - Snapshot interval must be 6, 8, 12, or 24 hours.

   * - .. apierror:: INVALID_SNAPSHOT_RETENTION_PERIOD
     - `400`_
     - Snapshot retention period must be between 1 and 5 days.

   * - .. apierror:: INVALID_SSH_KEY
     - `400`_
     - An invalid SSH key was specified.

   * - .. apierror:: INVALID_USER_ID
     - `404`_
     - An invalid user ID ``<ID>`` was specified.

   * - .. apierror:: INVALID_USERNAME
     - `400`_
     - The specified username is not a valid email address.

   * - .. apierror:: INVALID_USER
     - `400`_
     - No user ``<username>`` exists.

   * - .. apierror:: INVALID_WEEKLY_SNAPSHOT_RETENTION_PERIOD
     - `400`_
     - Weekly snapshot retention period must be between 1 and 52
       weeks.

   * - .. apierror:: INVALID_WINDOW_ID
     - `404`_
     - An invalid maintenance window ID ``<ID>`` was specified.

   * - .. apierror:: INVITATION_ONLY_MODE_OR_LDAP
     - `403`_
     - Forbidden when either in invitation mode or using an LDAP
       backend.

   * - .. apierror:: IP_ADDRESS_NOT_ON_ACCESS_LIST
     - `403`_
     - IP address ``<address>`` is not allowed to access this
       resource.

   * - .. apierror:: LAST_PING_NOT_FOUND
     - `404`_
     - No last ping exists for group ``<group>``.

   * - .. apierror:: LINK_EXPIRATION_AFTER_SNAPSHOT_DELETION
     - `409`_
     - Cannot set HTTP link expiration time after snapshot deletion
       time.

   * - .. apierror::LOG_COLLECTION_JOB_NOT_FOUND_IN_GROUP
     - `404`_
     - No job with the given ID exists in this group.

   * - .. apierror:: MAINTENANCE_WINDOW_NOT_FOUND
     - `404`_
     - No maintenance window with ID ``<ID>`` exists in group
       ``<group>``.

   * - .. apierror:: MAINTENANCE_WINDOW_START_DATE_AFTER_END_DATE
     - `400`_
     - Maintenance window configurations must specify a start date
       before their end date.

   * - .. apierror:: MAX_USERS_PER_TEAM_EXCEEDED
     - `400`_
     - Maximum number of |mms| users per team exceeded while trying
       to add users. Teams are limited to 250 users.

   * - .. apierror:: MAX_TEAMS_PER_ORG_EXCEEDED
     - `400`_
     - Maximum number of teams per organization exceeded while
       trying to add team. Organizations are limited to 250 teams.

   * - .. apierror:: METRIC_THRESHOLD_PRESENT
     - `400`_
     - The metric threshold should only be specific for host metric
       alerts.

   * - .. apierror:: MISSING_ALERT_CONFIG_ID
     - `404`_
     - No alert configuration ID was found.

   * - .. apierror:: MISSING_ATTRIBUTE
     - `400`_
     - The required attribute ``<attribute>`` was not specified.

   * - .. apierror:: MISSING_CREDENTIALS_FOR_AUTH_MECHANISM
     - `400`_
     - Authentication mechanism ``<mechanism>`` requires username
       and password.

   * - .. apierror:: MISSING_MAINTENANCE_WINDOW_ALERT_TYPE_NAME
     - `400`_
     - Maintenance window configurations must specify at least one
       alert type.

   * - .. apierror:: MISSING_MAINTENANCE_WINDOW_END_DATE
     - `400`_
     - Maintenance window configurations must specify an end date.

   * - .. apierror:: MISSING_MAINTENANCE_WINDOW_START_DATE
     - `400`_
     - Maintenance window configurations must specify a start date.

   * - .. apierror:: MISSING_METRIC_THRESHOLD
     - `400`_
     - A metric threshold must be specified for host metric alerts.

   * - .. apierror:: MISSING_NOTIFICATIONS
     - `400`_
     - At least one notification must be specified for an alert
       configuration.

   * - .. apierror:: MISSING_ONE_OF_ATTRIBUTES
     - `400`_
     - Either the ``<attribute>`` attribute or the ``<attribute>``
       attribute must be specified.

   * - .. apierror:: MISSING_ONE_OF_THREE_ATTRIBUTES
     - `400`_
     - Either the ``<attribute>`` attribute, the ``<attribute>``
       attribute, or the ``<attribute>`` attribute must be
       specified.

   * - .. apierror:: MISSING_OR_INVALID_ATTRIBUTE
     - `400`_
     - The required attribute ``<attribute>`` was incorrectly
       specified or omitted.

   * - .. apierror:: MISSING_PASSWORD
     - `400`_
     - Username cannot be changed without specifying password.

   * - .. apierror:: MISSING_QUERY_PARAMETER
     - `400`_
     - The required query parameter ``<parameter>`` was not
       specified.

   * - .. apierror:: MISSING_ROLE_ENTRY_IN_LDAP_MAPPING
     - `400`_
     - Missing ``<role>`` role or missing its value in LDAP Group
       Mapping.

   * - .. apierror:: MISSING_ROLES_FOR_GROUP_NOTIFICATION
     - `400`_
     - Group notifications cannot specify an empty list of roles.

   * - .. apierror:: MISSING_SYNC_SOURCE
     - `409`_
     - Changing the storage engine will require a resync, so a sync
       source must be provided.

   * - .. apierror:: MISSING_THRESHOLD
     - `400`_
     - A threshold must be specified for member health alerts.

   * - .. apierror:: MULTIPLE_GROUPS
     - `409`_
     - Multiple groups exist with the specified name.

   * - .. apierror:: MUTUALLY_EXCLUSIVE_QUERY_PARAMETERS
     - `400`_
     - Either the ``<parameter>`` query parameter or the
       ``<parameter>`` query parameter but not both should be
       specified.

   * - .. apierror:: NO_CHECKPOINT_FOR_PIT_RESTORE
     - `409`_
     - A suitable checkpoint could not be found for the specified
       point-in time restore.

   * - .. apierror:: NO_CURRENT_USER
     - `401`_
     - No current user.

   * - .. apierror:: NO_GROUP_SSH_KEY
     - `409`_
     - No group SSH key exists for group ``<group>``.

   * - .. apierror:: NONZERO_DELAY_REQUIRED
     - `400`_
     - The specified metric requires a nonzero delay for all
       notifications.

   * - .. apierror:: NOT_CONFIG_SERVER
     - `404`_
     - Host ``<host>`` is not an SCCC config server.

   * - .. apierror:: NOT_DATABASE_OR_DISK_METRIC
     - `404`_
     - Metric ``<metric>`` is neither a database nor a disk metric.

   * - .. apierror:: NOT_GLOBAL_USER_ADMIN
     - `401`_
     - The currently logged in user does not have the global user
       administrator.

   * - .. apierror:: NOT_GROUP_USER_ADMIN
     - `401`_
     - The currently logged in user does not have the user
       administrator role in group ``<group>``.

   * - .. apierror:: NOT_IN_GROUP
     - `401`_
     - The current user is not in the group, or the group does not
       exist.

   * - .. apierror:: NOT_ORG_ADMIN
     - `401`_
     - The currently logged in user does not have the administrator
       role in organization ``<organization>``.

   * - .. apierror:: NOT_SHARDED
     - `400`_
     - Only sharded clusters and replica sets can be patched.

   * - .. apierror:: NOT_USER_ADMIN
     - `401`_
     - The currently logged in user does not have the user
       administrator role for any group, team, or organization
       containing user ``<username>``.

   * - .. apierror:: NOTIFICATION_INTERVAL_OUT_OF_RANGE
     - `400`_
     - Notifications must have an internal of at least 5 minutes.

   * - .. apierror:: NOTIFICATION_TYPE_IS_GLOBAL_ONLY
     - `400`_
     - At least one notification is a type that is only available
       for global alert configurations.

   * - .. apierror:: ONLY_FAILED_JOB_CAN_BE_RESTARTED
     - `400`_
     - A log collection request job can only be restarted if it is
       in the ``FAILED`` state.

   * - .. apierror:: ORG_NOT_FOUND
     - `404`_
     - No organization with ID ``<ID>`` exists.

   * - .. apierror:: RATE_LIMITED
     - `429`_
     - Resource ``<resource>`` is limited to ``<number>`` requests
       every ``<number>`` minutes.

   * - .. apierror:: RESOURCE_NOT_FOUND
     - `404`_
     - Cannot find resource ``<resource>``.

   * - .. apierror:: RESTORE_JOB_NOT_FOUND_IN_GROUP
     - `404`_
     - No restore job with ID ``<ID>`` exists in group ``<group>``.

   * - .. apierror:: RESTORE_JOB_NOT_FOUND
     - `404`_
     - No restore job with ID ``<ID>`` exists for cluster
       ``<cluster>``.

   * - .. apierror:: ROLE_NEEDS_GROUP_ID
     - `400`_
     - Group-specific role ``<role>`` requires a group ID.

   * - .. apierror:: ROLE_NEEDS_NO_GROUP_ID
     - `400`_
     - Global role ``<role>`` cannot be specified with a group ID.

   * - .. apierror:: ROLE_NEEDS_NO_ORG_ID
     - `400`_
     - Role ``<role>`` cannot be specified with an organization ID.

   * - .. apierror:: ROLE_NEEDS_ORG_ID
     - `400`_
     - Role ``<role>`` requires an organization ID.

   * - .. apierror:: ROLES_SPECIFIED_FOR_USER
     - `403`_
     - Roles specified for user.

   * - .. apierror:: SNAPSHOT_NOT_FOUND
     - `404`_
     - No snapshot with ID ``<ID>`` exists for cluster
       ``<cluster>``.

   * - .. apierror:: THRESHOLD_PRESENT
     - `400`_
     - A threshold should only be present for member health alerts.

   * - .. apierror:: TOO_MANY_GROUP_NOTIFICATIONS
     - `400`_
     - At most one group notification can be specified for an alert
       configuration.

   * - .. apierror:: TOO_MANY_GROUP_TOKENS
     - `400`_
     - Groups are limited to ``<MAX_TAGS_PER_GROUP>`` tags.

   * - .. apierror:: TOTAL_MODE_DEPRECATED
     - `400`_
     - Mode ``TOTAL`` is no longer supported.

   * - .. apierror:: UNEXPECTED_ERROR
     - `500`_
     - Unexpected error.

   * - .. apierror:: UNITS_MISMATCH
     - `400`_
     - Threshold units cannot be converted to metric units.

   * - .. apierror:: UNSUPPORTED_AUTOMATION_AGENT_VERSION
     - .. `400`_
     - Automation agent version is less than the accepted minimum
       version.

   * - .. apierror:: UNSUPPORTED_DELIVERY_METHOD
     - `400`_
     - The specified delivery method is not supported.

   * - .. apierror:: UNSUPPORTED_FOR_CURRENT_CONFIG
     - `403`_
     - Operation not supported for current configuration.

   * - .. apierror:: UNSUPPORTED_FOR_CURRENT_PLAN
     - `403`_
     - Operation not supported for current plan.

   * - .. apierror:: UNSUPPORTED_NOTIFICATION_TYPE
     - `400`_
     - Notification type ``<type>`` is unsupported.

   * - .. apierror:: UNSUPPORTED_SET_BACKUP_STATE
     - `403`_
     - Setting the backup state to ``<state>`` is not supported.

   * - .. apierror:: UPGRADE_FOR_CLUSTER_CHECKPOINT_INTERVAL
     - `409`_
     - Cluster checkpoint interval not supported by this {+bagent+}
       version; :doc:`please upgrade </tutorial/nav/update-mongodb-agent>`.

   * - .. apierror:: UPGRADE_FOR_EXCLUDED_NAMESPACES
     - `409`_
     - Excluded namespaces are not supported by this {+bagent+}
       version; please upgrade.

   * - .. apierror:: UPGRADE_FOR_INCLUDED_NAMESPACES
     - `409`_
     - Included namespaces are not supported by this {+bagent+}
       version; please upgrade.

   * - .. apierror:: USER_ALREADY_EXISTS
     - `409`_
     - A user with username ``<username>`` already exists.

   * - .. apierror:: USER_NOT_FOUND
     - `404`_
     - No user with ID ``<ID>`` exists.

   * - .. apierror:: USER_NOT_IN_GROUP
     - `404`_
     - User ``<username>`` is not in group ``<group>``.

   * - .. apierror:: USER_UNAUTHORIZED
     - `401`_
     - Current user is not authorized to perform this action.

   * - .. apierror:: USERNAME_NOT_FOUND
     - `404`_
     - No user with username ``<username>`` exists.

   * - .. apierror:: WEAK_PASSWORD
     - `400`_
     - The specified password is not strong enough.

   * - .. apierror:: WEBHOOK_URL_NOT_SET
     - `400`_
     - Webhook URL must be set in the group before adding webhook
       notifications.

   * - .. apierror:: ACCESS_LIST_ACCESS_DENIED
     - `401`_
     - Cannot retrieve access list for user ``<username>``, which is not
       currently logged in.

   * - .. apierror:: ACCESS_LIST_NOT_FOUND
     - `404`_
     - IP address ``<address>`` not on access list for user
       ``<username>``.
