type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Profile() {
  const users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Samantha@april.biz",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
