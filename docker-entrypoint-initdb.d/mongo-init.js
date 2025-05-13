print("Started Adding the Users.");
db = db.getSiblingDB("admin");

db.createUser({
  user: "user",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" },
          { role: "readWriteAnyDatabase", db: "admin" },
          { role: "dbAdminAnyDatabase", db: "admin" },
          { role: "clusterAdmin", db: "admin" }],
});
print("End Adding the User Roles.");