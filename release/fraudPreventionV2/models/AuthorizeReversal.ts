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
import { Amount } from './Amount'
import { PaymentOutcome } from './PaymentOutcome'

import { AmountMapper } from './AmountMapper'

import { PaymentOutcomeMapper } from './PaymentOutcomeMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * Authorize Reversal operation on the payment. An authorize reversal operation represents a notification received usually from a 3rd party payment processor to indicate that an authorization hold should be released as a result of a sale being partially or completely cancelled.
 */
@JsonObject({ constructorParams: [{}] })
export class AuthorizeReversal {
    @JsonProperty({ name: 'id' })
    id?: string
    @JsonProperty({
        name: 'amount',
        type: (property) => AmountMapper.getType(property),
    })
    amount?: Amount
    @JsonProperty({
        name: 'outcome',
        type: (property) => PaymentOutcomeMapper.getType(property),
    })
    outcome?: PaymentOutcome

    public constructor(authorizeReversal: AuthorizeReversalProperties) {
        this.id = authorizeReversal.id
        this.amount = authorizeReversal.amount
        this.outcome = authorizeReversal.outcome
    }
}

export interface AuthorizeReversalProperties {
    id?: string
    amount?: Amount
    outcome?: PaymentOutcome
}
