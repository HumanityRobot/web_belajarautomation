import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// =========================
// Enums
// =========================

export const userPlanEnum = pgEnum("user_plan", [
  "free",
  "premium",
]);

// =========================
// Users
// =========================

export const users = pgTable("users", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  email: varchar("email", {
    length: 255,
  })
    .notNull()
    .unique(),

  passwordHash: text("password_hash")
    .notNull(),

  emailVerified: boolean("email_verified")
    .default(false)
    .notNull(),

  plan: userPlanEnum("plan")
    .default("free")
    .notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

// =========================
// Profiles
// =========================

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  userId: uuid("user_id")
    .notNull()
    .unique()
    .references(() => users.id, {
      onDelete: "cascade",
    }),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  role: varchar("role", {
    length: 100,
  }),

  bio: text("bio"),

  avatarUrl: text("avatar_url"),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});

// =========================
// Types
// =========================

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;