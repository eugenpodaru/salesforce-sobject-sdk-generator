/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export interface Org {
    orgId: string
    username: string
    instanceUrl: string
    accessToken: string
}

export const Org = {
    validate: (await import('./schemas/org.schema.js')).validate10 as unknown as ValidateFunction<Org>,
    get schema() {
        return Org.validate.schema
    },
    get errors() {
        return Org.validate.errors ?? undefined
    },
    is: (o: unknown): o is Org => Org.validate(o) === true,
    assert: (o: unknown) => {
        if (!Org.validate(o)) {
            throw new AjvValidator.ValidationError(Org.errors ?? [])
        }
    },
} as const

export interface OrgList {
    result: Org[]
}

export const OrgList = {
    validate: (await import('./schemas/org-list.schema.js')).validate10 as unknown as ValidateFunction<OrgList>,
    get schema() {
        return OrgList.validate.schema
    },
    get errors() {
        return OrgList.validate.errors ?? undefined
    },
    is: (o: unknown): o is OrgList => OrgList.validate(o) === true,
    assert: (o: unknown) => {
        if (!OrgList.validate(o)) {
            throw new AjvValidator.ValidationError(OrgList.errors ?? [])
        }
    },
} as const
