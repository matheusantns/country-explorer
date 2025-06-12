import { Country } from '@/types/countries';
import { BASE_URL } from '@/utils/contants';
import { NextResponse } from 'next/server';

type Data = {
  countries: Pick<Country, 'name' | 'region'>[];
};

type ErrorResponse = {
  error: string;
};

/**
 * API handler that fetches a list of countries and filters them by region.
 *
 * @returns {Promise<void>} A JSON response with filtered countries or an error message.
 */
export async function GET(request: Request): Promise<NextResponse<Data | ErrorResponse>> {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region');

  try {
    const response = await fetch(`${BASE_URL}/all?fields=name,region`);

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.statusText}`);
    }

    const countries = (await response.json()) as Pick<Country, 'name' | 'region'>[];

    const filtered = region ? countries.filter((country) => country.region === region) : countries;

    return NextResponse.json({ countries: filtered });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
