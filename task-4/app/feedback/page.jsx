export default async function FeedbackPage() {
  const feedback = await getFeedback();
  return (
    <div>
      <form action={submitFeedback}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="text" name="email" placeholder="Enter email" />
        <input type="text" name="message" placeholder="Enter message" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>
            <h1>Name : {item.name}</h1>
            <h5>Email : {item.email}</h5>
            <p>Message : {item.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
