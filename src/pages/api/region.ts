import { Country } from '@/types/countries';
import { BASE_URL } from '@/utils/contants';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  countries: Pick<Country, 'name' | 'region'>[];
};

type ErrorResponse = {
  error: string;
};

/**
 * API handler that fetches a list of countries and filters them by region.
 *
 * @param {NextApiRequest} req - The incoming API request object. Expects a `region` query parameter.
 * @param {NextApiResponse<Data | ErrorResponse>} res - The API response object.
 * @returns {Promise<void>} A JSON response with filtered countries or an error message.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
): Promise<void> {
  const { region } = req.query;

  try {
    const response = await fetch(`${BASE_URL}/all?fields=name,region`);

    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.statusText}`);
    }

    const countries = (await response.json()) as Pick<Country, 'name' | 'region'>[];

    res.status(200).json({
      countries: countries.filter((country) => country.region === region),
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
