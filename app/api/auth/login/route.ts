import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In a real app, validate credentials against database
    if (email && password) {
      // Simulate successful login
      return NextResponse.json(
        { 
          success: true, 
          user: { 
            id: '1', 
            email, 
            name: 'John Doe',
            shopUrl: 'demo-store.myshopify.com'
          },
          token: 'mock-jwt-token'
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}
