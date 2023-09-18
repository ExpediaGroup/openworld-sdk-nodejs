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
import { CurrentUserSession } from './CurrentUserSession'

import { CurrentUserSessionMapper } from './CurrentUserSessionMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * The `transaction_type` field value is used as a discriminator, with the following mapping: * `LOGIN`: `LoginTransactionDetails`
 */
@JsonObject({ constructorParams: [{}] })
export class AccountTakeoverTransactionDetails {
    /**
     * The local date and time the transaction occured in the Partner\'s system, in ISO-8061 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'transaction_date_time' })
    transactionDateTime: Date
    /**
     * Unique identifier to identify a transaction attempt in the Partner\'s system.
     */
    @JsonProperty({ name: 'transaction_id' })
    transactionId: string
    @JsonProperty({
        name: 'current_user_session',
        type: (property) => CurrentUserSessionMapper.getType(property),
    })
    currentUserSession?: CurrentUserSession

    public constructor(
        accountTakeoverTransactionDetails: AccountTakeoverTransactionDetailsProperties
    ) {
        this.transactionDateTime =
            accountTakeoverTransactionDetails.transactionDateTime
        this.transactionId = accountTakeoverTransactionDetails.transactionId
        this.currentUserSession =
            accountTakeoverTransactionDetails.currentUserSession
    }
}

export type AccountTakeoverTransactionDetailsTypeEnum = 'LOGIN'

export interface AccountTakeoverTransactionDetailsProperties {
    transactionDateTime: Date
    transactionId: string
    currentUserSession?: CurrentUserSession
}