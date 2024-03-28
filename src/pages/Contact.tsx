export default function Contact(){
    return (
        <div className="p-4">
            <h2>Contact</h2>
            <form className="grid gap-4">
                <div className="grid gap-1">
                    <label htmlFor="name">Name:</label>
                    <input className="w-full" type="text" />
                </div>
                <div className="grid gap-1">
                    <label htmlFor="email">Email:</label>
                    <input className="w-full" type="email" />
                </div>
                <div className="grid gap-1">
                    <label htmlFor="message">Message:</label>
                    <textarea className="w-full" name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="bg-gray-500 p-2">Submit</button>
            </form>
        </div>
    )
}