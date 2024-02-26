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
import { AvailablePolicy } from './AvailablePolicy'
import { Coordinates } from './Coordinates'
import { SupplyProvider } from './SupplyProvider'
import { Ticket } from './Ticket'
import { TravelProduct } from './TravelProduct'

import { SupplyProviderMapper } from './SupplyProviderMapper'

import { TicketMapper } from './TicketMapper'

import { CoordinatesMapper } from './CoordinatesMapper'

import { AvailablePolicyMapper } from './AvailablePolicyMapper'

import { JsonObject, JsonProperty } from 'typescript-json-serializer'
import { TravelProductProperties } from './TravelProduct'

@JsonObject({ constructorParams: [{}] })
export class Activity extends TravelProduct {
    /**
     * This field categorizes various types of activities available within the product. It allows API consumers to assign descriptive labels or keywords representing the nature of each activity. Possible category name values include: * `Adventures`: This category includes activities such as hiking, zip-lining, rock climbing, bungee jumping, and other adventurous pursuits. * `Air, Balloon & Helicopter Tours`: This category offers activities like hot air balloon rides, helicopter tours, and aerial sightseeing experiences. * `Cruises & Water Tours`: This includes options such as boat cruises, yacht tours, river rafting, snorkeling, and diving expeditions.  * `Nightlife`: This category encompasses activities like clubbing, pub crawls, live music events, and cultural performances. These activities predominantly occur during the evening or nighttime.
     */
    @JsonProperty({ name: 'category_name' })
    categoryName: string
    /**
     * This field provides additional details or a brief explanation of the specific activity.
     */
    @JsonProperty({ name: 'activity_description' })
    activityDescription: string
    @JsonProperty({
        name: 'supply_provider',
        type: (property) => SupplyProviderMapper.getType(property),
    })
    supplyProvider: SupplyProvider
    @JsonProperty({
        name: 'tickets',
        type: (property) => TicketMapper.getType(property),
    })
    tickets: Array<Ticket>
    @JsonProperty({
        name: 'coordinates',
        type: (property) => CoordinatesMapper.getType(property),
    })
    coordinates: Coordinates
    /**
     * The field represents the start time of an activity, using the ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'start_date_time' })
    startDateTime?: Date
    /**
     * The field represents the end time of an activity, using the ISO-8601 date and time format `yyyy-MM-ddTHH:mm:ss.SSSZ`.
     */
    @JsonProperty({ name: 'end_date_time' })
    endDateTime?: Date
    /**
     * Indicates whether a QR code is required for an activity, serving as proof of reservation or purchase. This includes digital tickets saved on mobile applications such as Google Pay, Apple Wallet, or similar services provided by activity organizers.
     */
    @JsonProperty({ name: 'is_passbook' })
    isPassbook?: boolean
    @JsonProperty({
        name: 'available_policy',
        type: (property) => AvailablePolicyMapper.getType(property),
    })
    availablePolicy?: AvailablePolicy

    @JsonProperty('type')
    readonly type = 'ACTIVITY'

    public constructor(activity: ActivityProperties) {
        super({
            price: activity.price,
            inventoryType: activity.inventoryType,
            inventorySource: activity.inventorySource,
            travelersReferences: activity.travelersReferences,
            payLater: activity.payLater,
        })
        this.categoryName = activity.categoryName
        this.activityDescription = activity.activityDescription
        this.supplyProvider = activity.supplyProvider
        this.tickets = activity.tickets
        this.coordinates = activity.coordinates
        this.startDateTime = activity.startDateTime
        this.endDateTime = activity.endDateTime
        this.isPassbook = activity.isPassbook
        this.availablePolicy = activity.availablePolicy
    }
}

export interface ActivityProperties extends TravelProductProperties {
    categoryName: string
    activityDescription: string
    supplyProvider: SupplyProvider
    tickets: Array<Ticket>
    coordinates: Coordinates
    startDateTime?: Date
    endDateTime?: Date
    isPassbook?: boolean
    availablePolicy?: AvailablePolicy
}