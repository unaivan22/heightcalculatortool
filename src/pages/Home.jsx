import { useState } from 'react';

export default function Home() {
  const [height, setHeight] = useState('');
  const [modalOpen, setModalOpen] = useState(true);

  const handleInputChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='space-y-2 border border-zinc-300 rounded-xl px-8 py-6'>
        <h1 className='font-bold text-2xl'>Height calculator tool</h1>
        <p className='text-zinc-700 font-thin'>It uses complicated calculations to calculate your height</p>
        <form onSubmit={handleSubmit}>
            <div className='flex items-center space-x-2'>
                <p className='w-fit'>Enter your height :</p>
                <input
                    type="number"
                    value={height}
                    onChange={handleInputChange}
                    required
                    className='input input-bordered w-fit'
                />
                <p className='w-fit'>cm</p>
            </div>
            <div className='w-full relative my-4 mx-4'>
                <button className="btn bg-black text-white hover:bg-black hover:text-white float-right" onClick={()=>document.getElementById('my_modal_3').showModal()} type="submit">Calculate Now</button>
            </div>
        </form>
      </div>

    
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Result</h3>
            {modalOpen && (
            <p>Your height is {height}cm!</p>
            )}
        </div>
    </dialog>
    </div>
  );
}