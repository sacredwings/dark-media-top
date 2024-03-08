// @ts-nocheck
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json('Ура !')
}

export const dynamic = 'force-dynamic';