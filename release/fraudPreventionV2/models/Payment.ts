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
import { Name } from './Name'
import { Operations } from './Operations'
import { PaymentBillingAddress } from './PaymentBillingAddress'
import { PaymentReason } from './PaymentReason'
import { PaymentThreeDSCriteria } from './PaymentThreeDSCriteria'

import { NameMapper } from './NameMapper'

import { PaymentBillingAddressMapper } from './PaymentBillingAddressMapper'

import { AmountMapper } from './AmountMapper'

import { PaymentThreeDSCriteriaMapper } from './PaymentThreeDSCriteriaMapper'

import { OperationsMapper } from './OperationsMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'

/**
 * The `method` field value is used as a discriminator, with the following mapping: * `CREDIT_CARD`: `CreditCard` * `PAYPAL`: `PayPal` * `POINTS`: `Points` * `GIFT_CARD`: `GiftCard` * `INTERNET_BANK_PAYMENT`: `InternetBankPayment` * `DIRECT_DEBIT`: `DirectDebit`
 */
@JsonObject({ constructorParams: [{}] })
export class Payment {
    /**
     * The `brand` field value is the payment brand used for payment on this transaction. For credit card payment method ensure attributes mentioned in dictionary below are set to corresponding values only. Ensure to comply with the naming standards provided in below dictionary. For example, some Payment processors use “Japan Credit Bureau” but “JCB” should be used when calling Fraud API. Incorrect `brand` - `card_type` combination will result in data quality issues and result in degraded risk recommendation. \'brand\' is an enum value with the following mapping with CreditCard \'card_type\' attribute: *       brand                 :      card_type * ------------------------------------------------------- * `AMERICAN_EXPRESS`          : `AMERICAN_EXPRESS` * `DINERS_CLUB_INTERNATIONAL` : `DINERS_CLUB` * `BC_CARD`                   : `DINERS_CLUB` * `DISCOVER`                  : `DISCOVER` * `BC_CARD`                   : `DISCOVER` * `DINERS_CLUB_INTERNATIONAL` : `DISCOVER` * `JCB`                       : `DISCOVER` * `JCB`                       : `JCB` * `MASTER_CARD`               : `MASTER_CARD` * `MAESTRO`                   : `MASTER_CARD` * `POSTEPAY_MASTERCARD`       : `MASTER_CARD` * `SOLO`                      : `SOLO` * `SWITCH`                    : `SWITCH` * `MAESTRO`                   : `MAESTRO` * `CHINA_UNION_PAY`           : `CHINA_UNION_PAY` * `VISA`                      : `VISA` * `VISA_DELTA`                : `VISA` * `VISA_ELECTRON`             : `VISA` * `CARTA_SI`                  : `VISA` * `CARTE_BLEUE`               : `VISA` * `VISA_DANKORT`              : `VISA` * `POSTEPAY_VISA_ELECTRON`    : `VISA` * `PAYPAL`                    :  \'brand\' with \'Points\' payment_type is an enum value with following: * `EXPEDIA_REWARDS` * `AMEX_POINTS` * `BANK_OF_AMERICA_REWARDS` * `DISCOVER_POINTS` * `MASTER_CARD_POINTS` * `CITI_THANK_YOU_POINTS` * `MERRILL_LYNCH_REWARDS` * `WELLS_FARGO_POINTS` * `DELTA_SKY_MILES` * `UNITED_POINTS` * `DISCOVER_MILES` * `ALASKA_MILES` * `RBC_REWARDS` * `BILT_REWARDS` * `ORBUCKS` * `CHEAP_CASH` * `BONUS_PLUS` * `ULTIMATE_REWARDS`  \'brand\' with \'GiftCard\' payment_type is an enum value with following: * `GIFT_CARD`  \'brand\' with \'InternetBankPayment\' payment_type is an enum value with following: * `IBP` * `LOCAL_DEBIT_CARD` * `SOFORT` * `YANDEX` * `WEB_MONEY` * `QIWI` * `BITCOIN`  \'brand\' with \'DirectDebit\' payment_type is an enum value with following: * `ELV` * `INTER_COMPANY`
     */
    @JsonProperty({ name: 'brand' })
    brand: PaymentBrandEnum
    @JsonProperty({ name: 'reason' })
    reason?: PaymentReason
    @JsonProperty({
        name: 'billing_name',
        type: (property) => NameMapper.getType(property),
    })
    billingName: Name
    @JsonProperty({
        name: 'billing_address',
        type: (property) => PaymentBillingAddressMapper.getType(property),
    })
    billingAddress: PaymentBillingAddress
    /**
     * Email address associated with the payment.
     */
    @JsonProperty({ name: 'billing_email_address' })
    billingEmailAddress: string
    @JsonProperty({
        name: 'authorized_amount',
        type: (property) => AmountMapper.getType(property),
    })
    authorizedAmount?: Amount
    @JsonProperty({
        name: 'verified_amount',
        type: (property) => AmountMapper.getType(property),
    })
    verifiedAmount?: Amount
    @JsonProperty({
        name: 'three_digits_secure_criteria',
        type: (property) => PaymentThreeDSCriteriaMapper.getType(property),
    })
    threeDigitsSecureCriteria?: PaymentThreeDSCriteria
    @JsonProperty({
        name: 'operations',
        type: (property) => OperationsMapper.getType(property),
    })
    operations?: Operations

    public constructor(payment: PaymentProperties) {
        this.brand = payment.brand
        this.reason = payment.reason
        this.billingName = payment.billingName
        this.billingAddress = payment.billingAddress
        this.billingEmailAddress = payment.billingEmailAddress
        this.authorizedAmount = payment.authorizedAmount
        this.verifiedAmount = payment.verifiedAmount
        this.threeDigitsSecureCriteria = payment.threeDigitsSecureCriteria
        this.operations = payment.operations
    }
}

export type PaymentBrandEnum =
    | 'AMERICAN_EXPRESS'
    | 'DINERS_CLUB_INTERNATIONAL'
    | 'BC_CARD'
    | 'DISCOVER'
    | 'JCB'
    | 'MASTER_CARD'
    | 'MAESTRO'
    | 'POSTEPAY_MASTERCARD'
    | 'SOLO'
    | 'SWITCH'
    | 'CHINA_UNION_PAY'
    | 'VISA'
    | 'VISA_DELTA'
    | 'VISA_ELECTRON'
    | 'CARTA_SI'
    | 'CARTE_BLEUE'
    | 'VISA_DANKORT'
    | 'POSTEPAY_VISA_ELECTRON'
    | 'PAYPAL'
    | 'EXPEDIA_REWARDS'
    | 'AMEX_POINTS'
    | 'BANK_OF_AMERICA_REWARDS'
    | 'DISCOVER_POINTS'
    | 'MASTER_CARD_POINTS'
    | 'CITI_THANK_YOU_POINTS'
    | 'MERRILL_LYNCH_REWARDS'
    | 'WELLS_FARGO_POINTS'
    | 'DELTA_SKY_MILES'
    | 'UNITED_POINTS'
    | 'DISCOVER_MILES'
    | 'ALASKA_MILES'
    | 'RBC_REWARDS'
    | 'BILT_REWARDS'
    | 'ORBUCKS'
    | 'CHEAP_CASH'
    | 'BONUS_PLUS'
    | 'ULTIMATE_REWARDS'
    | 'GIFT_CARD'
    | 'IBP'
    | 'LOCAL_DEBIT_CARD'
    | 'SOFORT'
    | 'YANDEX'
    | 'WEB_MONEY'
    | 'QIWI'
    | 'BITCOIN'
    | 'ELV'
    | 'INTER_COMPANY'

export interface PaymentProperties {
    brand: PaymentBrandEnum
    reason?: PaymentReason
    billingName: Name
    billingAddress: PaymentBillingAddress
    billingEmailAddress: string
    authorizedAmount?: Amount
    verifiedAmount?: Amount
    threeDigitsSecureCriteria?: PaymentThreeDSCriteria
    operations?: Operations
}
