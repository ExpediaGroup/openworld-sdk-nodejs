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

@JsonObject({ constructorParams: [{}] })
export class HotelAllOfAddress {
    @JsonProperty({ name: 'address_type' })
    addressType?: HotelAllOfAddressAddressTypeEnum
    /**
     * Address line 1 of the address provided.
     */
    @JsonProperty({ name: 'address_line1' })
    addressLine1: string
    /**
     * Address line 2 of the address provided.
     */
    @JsonProperty({ name: 'address_line2' })
    addressLine2?: string
    /**
     * City of the address provided.
     */
    @JsonProperty({ name: 'city' })
    city: string
    /**
     * The two-characters ISO code for the state or province of the address.
     */
    @JsonProperty({ name: 'state' })
    state: string
    /**
     * Zip code of the address provided.
     */
    @JsonProperty({ name: 'zip_code' })
    zipCode: string
    /**
     * ISO alpha-3 country code of the address provided.
     */
    @JsonProperty({ name: 'country_code' })
    countryCode: string

    public constructor(hotelAllOfAddress: HotelAllOfAddressProperties) {
        this.addressType = hotelAllOfAddress.addressType
        this.addressLine1 = hotelAllOfAddress.addressLine1
        this.addressLine2 = hotelAllOfAddress.addressLine2
        this.city = hotelAllOfAddress.city
        this.state = hotelAllOfAddress.state
        this.zipCode = hotelAllOfAddress.zipCode
        this.countryCode = hotelAllOfAddress.countryCode
    }
}

export type HotelAllOfAddressAddressTypeEnum = 'HOME' | 'WORK'

export interface HotelAllOfAddressProperties {
    addressType?: HotelAllOfAddressAddressTypeEnum
    addressLine1: string
    addressLine2?: string
    city: string
    state: string
    zipCode: string
    countryCode: string
}