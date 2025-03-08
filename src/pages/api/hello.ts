// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Event = {
  id: number;
  name: string;
  date: string;
};

let events: Event[] = [
  { id: 1, name: 'Workshop AI', date: '2025-02-20' },
  { id: 2, name: 'Seminar IoT', date: '2025-03-15' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Mengembalikan daftar event
    res.status(200).json(events);
  } else if (req.method === 'POST') {
    // Menambahkan event baru
    const newEvent: Event = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.status(201).json({ message: 'Event added!', data: newEvent });
  } else {
    // Method tidak didukung
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
