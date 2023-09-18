/*
 * Copyright (C) 2023 Expedia, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.

 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Information specific to the remediation action initiated by the Partner\'s system to a user.
 */
@JsonObject({ constructorParams: [{}] })
export class RemediationUpdateAction {
    /**
     * The categorized remediation action initiated by the Partner\'\'s system to a user. Possible values are: - `PASSWORD_RESET` - Applicable if this event is the result of a password reset by the Partner\'\'s system. - `DISABLE_ACCOUNT` - Applicable if this event is the result of disabling an account by the Partner\'\'s system. - `TERMINATE_ALL_SESSIONS` - Applicable if this event is the result of terminating all active user sessions of an account by the Partner\'\'s system.
     */
    @JsonProperty({ name: 'action_name' })
    actionName: RemediationUpdateActionActionNameEnum
    /**
     * The status of the remediation action.   - `SUCCESS` - Applicable if the Partner\'\'s system was successfully able to perform the remediation action.   - `FAILED` - Applicable if the Partner\'\'s system failed to perform the remediation action.
     */
    @JsonProperty({ name: 'status' })
    status: RemediationUpdateActionStatusEnum
    /**
     * The local date and time the remediation action to a user ended in the Partner\'s system, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'update_end_date_time' })
    updateEndDateTime?: Date

    public constructor(
        remediationUpdateAction: RemediationUpdateActionProperties
    ) {
        this.actionName = remediationUpdateAction.actionName
        this.status = remediationUpdateAction.status
        this.updateEndDateTime = remediationUpdateAction.updateEndDateTime
    }
}

export type RemediationUpdateActionActionNameEnum =
    | 'PASSWORD_RESET'
    | 'DISABLE_ACCOUNT'
    | 'TERMINATE_ALL_SESSIONS'
export type RemediationUpdateActionStatusEnum = 'SUCCESS' | 'FAILED'

export interface RemediationUpdateActionProperties {
    actionName: RemediationUpdateActionActionNameEnum
    status: RemediationUpdateActionStatusEnum
    updateEndDateTime?: Date
}