// Currency formatter
export const currencyFormatter = (val?: number) => {
  if (!val) return '';
  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(val);

  return formattedValue;
};

// View formatter
export const viewFormatter = (val?: number) => {
  if (!val) return '';
  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(val);

  const stringFormattedValue =
    formattedValue.toString() + (val > 1 ? ' Views' : ' View');

  return stringFormattedValue;
};

// Date time formatter
export const dateTimeFormatter = (date?: Date): string => {
  if (!date) return '';
  const now = new Date();
  const timeDifference = now.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  switch (true) {
    case seconds < 60:
      return `${seconds} seconds ago`;
    case minutes === 1:
      return 'a minute ago';
    case minutes < 60:
      return `${minutes} minutes ago`;
    case hours === 1:
      return 'an hour ago';
    case hours < 24:
      return `${hours} hours ago`;
    case days === 1:
      return 'a day ago';
    case days < 7:
      return `${days} days ago`;
    case weeks === 1:
      return 'a week ago';
    case weeks < 4:
      return `${weeks} weeks ago`;
    case months === 1:
      return 'a month ago';
    case months < 12:
      return `${months} months ago`;
    case years === 1:
      return 'a year ago';
    default:
      return `${years} years ago`;
  }
};

export const saleCountFormatter = (val?: number) => {
  if (!val) return '';

  // Check if the value is greater than or equal to 1 million
  if (val >= 1000000) {
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(val / 1000000);

    const trimmedValue = formattedValue.replace(/\.0$/, '');

    // Append 'M+' to indicate millions or more
    return `${trimmedValue}M+ sold`;
  } else if (val >= 1000) {
    // Check if the value is greater than or equal to 1000
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(val / 1000);

    const trimmedValue = formattedValue.replace(/\.0$/, '');

    // Append 'k+' to indicate thousands or more
    return `${trimmedValue}k+ sold`;
  } else {
    // For values less than 1000, use the regular decimal formatter
    const formattedValue = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(val);

    return formattedValue + ' sold';
  }
};

export const ratingFormatter = (val?: number) => {
  if (!val) return '';

  // Format the value with a comma as a separator
  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    useGrouping: true, // Use grouping separator (comma)
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(val);

  return formattedValue;
};

interface CardStoreProps {
  title: string;
  address: string;
  imageUrl: string;
  linkMaps: string | null;
  startDate: Date | null;
  endDate: Date | null;
  time: string | null;
  type: string;
  bannerUrl: string;
}

// Function to format interval date
export const formatIntervalDate = (start?: Date, end?: Date): string => {
  if (!start) return '';
  if (!end) return '';

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // If there is no end date or the end date is the same as the start date, display only one date
  if (!end || end.getTime() === start.getTime()) {
    return new Intl.DateTimeFormat('id-ID', options).format(start);
  } else {
    // If there is an end date different from the start date, display the interval
    const formattedStart = new Intl.DateTimeFormat('id-ID', options).format(
      start
    );
    const formattedEnd = new Intl.DateTimeFormat('id-ID', options).format(end);
    return `${formattedStart} - ${formattedEnd}`;
  }
};
