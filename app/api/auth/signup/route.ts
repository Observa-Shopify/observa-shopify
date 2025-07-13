import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, firstName, lastName, shopUrl } = body

    // In a real app, validate data and create user in database
    if (email && password && firstName && lastName && shopUrl) {
      // Simulate successful signup
      return NextResponse.json(
        { 
          success: true, 
          user: { 
            id: '1', 
            email, 
            name: `${firstName} ${lastName}`,
            shopUrl
          },
          token: 'mock-jwt-token'
        },
        { status: 201 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
