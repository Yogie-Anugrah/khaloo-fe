'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, type ElementRef } from 'react';

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (dialogElement) {
      document.body.style.overflow = 'hidden'; // Disable scrolling

      // Show the modal
      dialogElement.showModal();

      // Set up an event listener for when the dialog is closed
      dialogElement.addEventListener('close', () => {
        document.body.style.overflow = 'auto'; // Enable scrolling when the dialog is closed
        router.back();
      });
    }

    // Cleanup when the component is unmounted
    return () => {
      if (dialogElement) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [router]);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      className='flex h-[80%] max-h-[800px] w-[80%] max-w-[700px] flex-col gap-8 rounded-2xl bg-white px-6 py-5 sm:h-full sm:max-h-[700px] sm:px-8 sm:py-6 md:px-10 md:py-8 lg:gap-12 lg:rounded-3xl lg:px-12 lg:py-10 2xl:px-16 2xl:py-12'
      onClose={onDismiss}
    >
      {children}
    </dialog>
  );
}
