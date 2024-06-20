'use client';

import { type ElementRef, useEffect, useRef } from 'react';

export function Modal({ children }: { children: React.ReactNode }) {
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);


    return (
        <div className="modal-backdrop">
            <dialog ref={dialogRef} className="modal" >
                {children}
                <button className="close-button" />
            </dialog>
        </div>
    );
}