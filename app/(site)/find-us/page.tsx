import SearchClient from '@/app/(site)/find-us/search-client';
import { Event, Location } from '@/components/card-store';

async function getStores(): Promise<Location[]> {
  try {
    const res = await fetch('https://khaloo-be-nine.vercel.app/locations', { cache: "no-cache" });

    if (!res.ok) {
      throw new Error('Failed to fetch data stores');
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getEvents(): Promise<Event[]> {
  try {
    const res = await fetch('https://khaloo-be-nine.vercel.app/events', { cache: "no-cache" });

    if (!res.ok) {
      throw new Error('Failed to fetch data events');
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error('Data is not an array');
    }

    // Convert the date strings to Date objects
    return data.map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
}


const FindUsPage = async () => {
  const stores = await getStores();
  const events = await getEvents();
  const allData = {
    stores: stores,
    events: events
  }

  return (
    <main className='min-h-screen flex w-full flex-col items-center gap-10 px-8 py-8 sm:px-10 md:px-20 lg:gap-20 lg:px-40 lg:py-10 xl:py-14 2xl:px-52 2xl:py-20'>
      <SearchClient data={allData} />
    </main>
  );
};

export default FindUsPage;
