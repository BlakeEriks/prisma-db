
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quote
 * 
 */
export type Quote = $Result.DefaultSelection<Prisma.$QuotePayload>
/**
 * Model UserFavorite
 * 
 */
export type UserFavorite = $Result.DefaultSelection<Prisma.$UserFavoritePayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.quote`: Exposes CRUD operations for the **Quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.QuoteDelegate<ExtArgs>;

  /**
   * `prisma.userFavorite`: Exposes CRUD operations for the **UserFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorites
    * const userFavorites = await prisma.userFavorite.findMany()
    * ```
    */
  get userFavorite(): Prisma.UserFavoriteDelegate<ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Quote: 'Quote',
    UserFavorite: 'UserFavorite',
    Book: 'Book',
    Author: 'Author',
    Tag: 'Tag',
    Message: 'Message',
    Habit: 'Habit',
    HabitLog: 'HabitLog',
    Reminder: 'Reminder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "quote" | "userFavorite" | "book" | "author" | "tag" | "message" | "habit" | "habitLog" | "reminder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Quote: {
        payload: Prisma.$QuotePayload<ExtArgs>
        fields: Prisma.QuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findFirst: {
            args: Prisma.QuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findMany: {
            args: Prisma.QuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          create: {
            args: Prisma.QuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          createMany: {
            args: Prisma.QuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          delete: {
            args: Prisma.QuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          update: {
            args: Prisma.QuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          deleteMany: {
            args: Prisma.QuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          aggregate: {
            args: Prisma.QuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuote>
          }
          groupBy: {
            args: Prisma.QuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteCountAggregateOutputType> | number
          }
        }
      }
      UserFavorite: {
        payload: Prisma.$UserFavoritePayload<ExtArgs>
        fields: Prisma.UserFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findMany: {
            args: Prisma.UserFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          create: {
            args: Prisma.UserFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          createMany: {
            args: Prisma.UserFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          update: {
            args: Prisma.UserFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorite>
          }
          groupBy: {
            args: Prisma.UserFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quotes: number
    favorites: number
    messages: number
    habits: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | UserCountOutputTypeCountQuotesArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }


  /**
   * Count Type QuoteCountOutputType
   */

  export type QuoteCountOutputType = {
    tags: number
    userFavorite: number
  }

  export type QuoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | QuoteCountOutputTypeCountTagsArgs
    userFavorite?: boolean | QuoteCountOutputTypeCountUserFavoriteArgs
  }

  // Custom InputTypes
  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteCountOutputType
     */
    select?: QuoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * QuoteCountOutputType without action
   */
  export type QuoteCountOutputTypeCountUserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    quotes: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | BookCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    quotes: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | TagCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    reminders: number
    habitLogs: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | HabitCountOutputTypeCountRemindersArgs
    habitLogs?: boolean | HabitCountOutputTypeCountHabitLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    telegramId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    telegramId: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    telegramId: bigint | null
    timezone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    telegramId: bigint | null
    timezone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    telegramId: number
    timezone: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    telegramId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    telegramId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    telegramId?: true
    timezone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    telegramId?: true
    timezone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    telegramId?: true
    timezone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    telegramId: bigint
    timezone: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telegramId?: boolean
    timezone?: boolean
    quotes?: boolean | User$quotesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telegramId?: boolean
    timezone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    telegramId?: boolean
    timezone?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | User$quotesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
      favorites: Prisma.$UserFavoritePayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      telegramId: bigint
      timezone: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends User$quotesArgs<ExtArgs> = {}>(args?: Subset<T, User$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany"> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'BigInt'>
    readonly timezone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.quotes
   */
  export type User$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quote
   */

  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _avg: QuoteAvgAggregateOutputType | null
    _sum: QuoteSumAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type QuoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type QuoteMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    meta: string | null
    content: string | null
    quotee: string | null
    userId: number | null
    deleted: boolean | null
    bookId: number | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    meta: string | null
    content: string | null
    quotee: string | null
    userId: number | null
    deleted: boolean | null
    bookId: number | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    createdAt: number
    meta: number
    content: number
    quotee: number
    userId: number
    deleted: number
    bookId: number
    _all: number
  }


  export type QuoteAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type QuoteSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type QuoteMinAggregateInputType = {
    id?: true
    createdAt?: true
    meta?: true
    content?: true
    quotee?: true
    userId?: true
    deleted?: true
    bookId?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    meta?: true
    content?: true
    quotee?: true
    userId?: true
    deleted?: true
    bookId?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    createdAt?: true
    meta?: true
    content?: true
    quotee?: true
    userId?: true
    deleted?: true
    bookId?: true
    _all?: true
  }

  export type QuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quote to aggregate.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type QuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithAggregationInput | QuoteOrderByWithAggregationInput[]
    by: QuoteScalarFieldEnum[] | QuoteScalarFieldEnum
    having?: QuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _avg?: QuoteAvgAggregateInputType
    _sum?: QuoteSumAggregateInputType
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }

  export type QuoteGroupByOutputType = {
    id: number
    createdAt: Date
    meta: string | null
    content: string
    quotee: string | null
    userId: number
    deleted: boolean
    bookId: number | null
    _count: QuoteCountAggregateOutputType | null
    _avg: QuoteAvgAggregateOutputType | null
    _sum: QuoteSumAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type QuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    meta?: boolean
    content?: boolean
    quotee?: boolean
    userId?: boolean
    deleted?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Quote$tagsArgs<ExtArgs>
    book?: boolean | Quote$bookArgs<ExtArgs>
    userFavorite?: boolean | Quote$userFavoriteArgs<ExtArgs>
    _count?: boolean | QuoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    meta?: boolean
    content?: boolean
    quotee?: boolean
    userId?: boolean
    deleted?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | Quote$bookArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectScalar = {
    id?: boolean
    createdAt?: boolean
    meta?: boolean
    content?: boolean
    quotee?: boolean
    userId?: boolean
    deleted?: boolean
    bookId?: boolean
  }

  export type QuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Quote$tagsArgs<ExtArgs>
    book?: boolean | Quote$bookArgs<ExtArgs>
    userFavorite?: boolean | Quote$userFavoriteArgs<ExtArgs>
    _count?: boolean | QuoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | Quote$bookArgs<ExtArgs>
  }

  export type $QuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      book: Prisma.$BookPayload<ExtArgs> | null
      userFavorite: Prisma.$UserFavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      meta: string | null
      content: string
      quotee: string | null
      userId: number
      deleted: boolean
      bookId: number | null
    }, ExtArgs["result"]["quote"]>
    composites: {}
  }

  type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = $Result.GetResult<Prisma.$QuotePayload, S>

  type QuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuoteCountAggregateInputType | true
    }

  export interface QuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quote'], meta: { name: 'Quote' } }
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteFindUniqueArgs>(args: SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteFindFirstArgs>(args?: SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteFindManyArgs>(args?: SelectSubset<T, QuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
     */
    create<T extends QuoteCreateArgs>(args: SelectSubset<T, QuoteCreateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quotes.
     * @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteCreateManyArgs>(args?: SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotes and returns the data saved in the database.
     * @param {QuoteCreateManyAndReturnArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
     */
    delete<T extends QuoteDeleteArgs>(args: SelectSubset<T, QuoteDeleteArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteUpdateArgs>(args: SelectSubset<T, QuoteUpdateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteDeleteManyArgs>(args?: SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteUpdateManyArgs>(args: SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
     */
    upsert<T extends QuoteUpsertArgs>(args: SelectSubset<T, QuoteUpsertArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(
      args?: Subset<T, QuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteGroupByArgs['orderBy'] }
        : { orderBy?: QuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quote model
   */
  readonly fields: QuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tags<T extends Quote$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Quote$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    book<T extends Quote$bookArgs<ExtArgs> = {}>(args?: Subset<T, Quote$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    userFavorite<T extends Quote$userFavoriteArgs<ExtArgs> = {}>(args?: Subset<T, Quote$userFavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quote model
   */ 
  interface QuoteFieldRefs {
    readonly id: FieldRef<"Quote", 'Int'>
    readonly createdAt: FieldRef<"Quote", 'DateTime'>
    readonly meta: FieldRef<"Quote", 'String'>
    readonly content: FieldRef<"Quote", 'String'>
    readonly quotee: FieldRef<"Quote", 'String'>
    readonly userId: FieldRef<"Quote", 'Int'>
    readonly deleted: FieldRef<"Quote", 'Boolean'>
    readonly bookId: FieldRef<"Quote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Quote findUnique
   */
  export type QuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findUniqueOrThrow
   */
  export type QuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findFirst
   */
  export type QuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findFirstOrThrow
   */
  export type QuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findMany
   */
  export type QuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quotes to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote create
   */
  export type QuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Quote.
     */
    data: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
  }

  /**
   * Quote createMany
   */
  export type QuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quote createManyAndReturn
   */
  export type QuoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quote update
   */
  export type QuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Quote.
     */
    data: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
    /**
     * Choose, which Quote to update.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote updateMany
   */
  export type QuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotes.
     */
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     */
    where?: QuoteWhereInput
  }

  /**
   * Quote upsert
   */
  export type QuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Quote to update in case it exists.
     */
    where: QuoteWhereUniqueInput
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     */
    create: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
  }

  /**
   * Quote delete
   */
  export type QuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter which Quote to delete.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote deleteMany
   */
  export type QuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotes to delete
     */
    where?: QuoteWhereInput
  }

  /**
   * Quote.tags
   */
  export type Quote$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Quote.book
   */
  export type Quote$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * Quote.userFavorite
   */
  export type Quote$userFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * Quote without action
   */
  export type QuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorite
   */

  export type AggregateUserFavorite = {
    _count: UserFavoriteCountAggregateOutputType | null
    _avg: UserFavoriteAvgAggregateOutputType | null
    _sum: UserFavoriteSumAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  export type UserFavoriteAvgAggregateOutputType = {
    userId: number | null
    quoteId: number | null
  }

  export type UserFavoriteSumAggregateOutputType = {
    userId: number | null
    quoteId: number | null
  }

  export type UserFavoriteMinAggregateOutputType = {
    userId: number | null
    quoteId: number | null
  }

  export type UserFavoriteMaxAggregateOutputType = {
    userId: number | null
    quoteId: number | null
  }

  export type UserFavoriteCountAggregateOutputType = {
    userId: number
    quoteId: number
    _all: number
  }


  export type UserFavoriteAvgAggregateInputType = {
    userId?: true
    quoteId?: true
  }

  export type UserFavoriteSumAggregateInputType = {
    userId?: true
    quoteId?: true
  }

  export type UserFavoriteMinAggregateInputType = {
    userId?: true
    quoteId?: true
  }

  export type UserFavoriteMaxAggregateInputType = {
    userId?: true
    quoteId?: true
  }

  export type UserFavoriteCountAggregateInputType = {
    userId?: true
    quoteId?: true
    _all?: true
  }

  export type UserFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorite to aggregate.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorites
    **/
    _count?: true | UserFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type GetUserFavoriteAggregateType<T extends UserFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorite[P]>
      : GetScalarType<T[P], AggregateUserFavorite[P]>
  }




  export type UserFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithAggregationInput | UserFavoriteOrderByWithAggregationInput[]
    by: UserFavoriteScalarFieldEnum[] | UserFavoriteScalarFieldEnum
    having?: UserFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteCountAggregateInputType | true
    _avg?: UserFavoriteAvgAggregateInputType
    _sum?: UserFavoriteSumAggregateInputType
    _min?: UserFavoriteMinAggregateInputType
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type UserFavoriteGroupByOutputType = {
    userId: number
    quoteId: number
    _count: UserFavoriteCountAggregateOutputType | null
    _avg: UserFavoriteAvgAggregateOutputType | null
    _sum: UserFavoriteSumAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  type GetUserFavoriteGroupByPayload<T extends UserFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    quoteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    quoteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectScalar = {
    userId?: boolean
    quoteId?: boolean
  }

  export type UserFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
  }
  export type UserFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quote?: boolean | QuoteDefaultArgs<ExtArgs>
  }

  export type $UserFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quote: Prisma.$QuotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      quoteId: number
    }, ExtArgs["result"]["userFavorite"]>
    composites: {}
  }

  type UserFavoriteGetPayload<S extends boolean | null | undefined | UserFavoriteDefaultArgs> = $Result.GetResult<Prisma.$UserFavoritePayload, S>

  type UserFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFavoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserFavoriteCountAggregateInputType | true
    }

  export interface UserFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorite'], meta: { name: 'UserFavorite' } }
    /**
     * Find zero or one UserFavorite that matches the filter.
     * @param {UserFavoriteFindUniqueArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteFindUniqueArgs>(args: SelectSubset<T, UserFavoriteFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserFavorite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFavoriteFindUniqueOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteFindFirstArgs>(args?: SelectSubset<T, UserFavoriteFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany()
     * 
     * // Get first 10 UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userFavoriteWithUserIdOnly = await prisma.userFavorite.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFavoriteFindManyArgs>(args?: SelectSubset<T, UserFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserFavorite.
     * @param {UserFavoriteCreateArgs} args - Arguments to create a UserFavorite.
     * @example
     * // Create one UserFavorite
     * const UserFavorite = await prisma.userFavorite.create({
     *   data: {
     *     // ... data to create a UserFavorite
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteCreateArgs>(args: SelectSubset<T, UserFavoriteCreateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserFavorites.
     * @param {UserFavoriteCreateManyArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteCreateManyArgs>(args?: SelectSubset<T, UserFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavorites and returns the data saved in the database.
     * @param {UserFavoriteCreateManyAndReturnArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavorites and only return the `userId`
     * const userFavoriteWithUserIdOnly = await prisma.userFavorite.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserFavorite.
     * @param {UserFavoriteDeleteArgs} args - Arguments to delete one UserFavorite.
     * @example
     * // Delete one UserFavorite
     * const UserFavorite = await prisma.userFavorite.delete({
     *   where: {
     *     // ... filter to delete one UserFavorite
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteDeleteArgs>(args: SelectSubset<T, UserFavoriteDeleteArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserFavorite.
     * @param {UserFavoriteUpdateArgs} args - Arguments to update one UserFavorite.
     * @example
     * // Update one UserFavorite
     * const userFavorite = await prisma.userFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteUpdateArgs>(args: SelectSubset<T, UserFavoriteUpdateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserFavorites.
     * @param {UserFavoriteDeleteManyArgs} args - Arguments to filter UserFavorites to delete.
     * @example
     * // Delete a few UserFavorites
     * const { count } = await prisma.userFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteUpdateManyArgs>(args: SelectSubset<T, UserFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFavorite.
     * @param {UserFavoriteUpsertArgs} args - Arguments to update or create a UserFavorite.
     * @example
     * // Update or create a UserFavorite
     * const userFavorite = await prisma.userFavorite.upsert({
     *   create: {
     *     // ... data to create a UserFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorite we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteUpsertArgs>(args: SelectSubset<T, UserFavoriteUpsertArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteCountArgs} args - Arguments to filter UserFavorites to count.
     * @example
     * // Count the number of UserFavorites
     * const count = await prisma.userFavorite.count({
     *   where: {
     *     // ... the filter for the UserFavorites we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteCountArgs>(
      args?: Subset<T, UserFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavoriteAggregateArgs>(args: Subset<T, UserFavoriteAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteAggregateType<T>>

    /**
     * Group by UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorite model
   */
  readonly fields: UserFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    quote<T extends QuoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteDefaultArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFavorite model
   */ 
  interface UserFavoriteFieldRefs {
    readonly userId: FieldRef<"UserFavorite", 'Int'>
    readonly quoteId: FieldRef<"UserFavorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorite findUnique
   */
  export type UserFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findUniqueOrThrow
   */
  export type UserFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findFirst
   */
  export type UserFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findFirstOrThrow
   */
  export type UserFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findMany
   */
  export type UserFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorites to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite create
   */
  export type UserFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorite.
     */
    data: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
  }

  /**
   * UserFavorite createMany
   */
  export type UserFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavorite createManyAndReturn
   */
  export type UserFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite update
   */
  export type UserFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorite.
     */
    data: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
    /**
     * Choose, which UserFavorite to update.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite updateMany
   */
  export type UserFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
  }

  /**
   * UserFavorite upsert
   */
  export type UserFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorite to update in case it exists.
     */
    where: UserFavoriteWhereUniqueInput
    /**
     * In case the UserFavorite found by the `where` argument doesn't exist, create a new UserFavorite with this data.
     */
    create: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
    /**
     * In case the UserFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
  }

  /**
   * UserFavorite delete
   */
  export type UserFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter which UserFavorite to delete.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite deleteMany
   */
  export type UserFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorites to delete
     */
    where?: UserFavoriteWhereInput
  }

  /**
   * UserFavorite without action
   */
  export type UserFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    source: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    source: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    source: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    source?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    source?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    source?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    authorId: number
    source: string | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    source?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    quotes?: boolean | Book$quotesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    source?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    source?: boolean
  }

  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    quotes?: boolean | Book$quotesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number
      source: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    quotes<T extends Book$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Book$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly authorId: FieldRef<"Book", 'Int'>
    readonly source: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }

  /**
   * Book.quotes
   */
  export type Book$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly name: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quotes?: boolean | Tag$quotesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | Tag$quotesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends Tag$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.quotes
   */
  export type Tag$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    text: string | null
    userId: number | null
    created: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    text: string | null
    userId: number | null
    created: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    text: number
    userId: number
    created: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    created?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    created?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    created?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    text: string
    userId: number
    created: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    created?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    created?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    text?: boolean
    userId?: boolean
    created?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      userId: number
      created: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly text: FieldRef<"Message", 'String'>
    readonly userId: FieldRef<"Message", 'Int'>
    readonly created: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HabitSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    dataType: string | null
  }

  export type HabitMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    dataType: string | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    dataType: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HabitSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dataType?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dataType?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    dataType?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: number
    userId: number
    name: string
    dataType: string
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    dataType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Habit$remindersArgs<ExtArgs>
    habitLogs?: boolean | Habit$habitLogsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    dataType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    dataType?: boolean
  }

  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reminders?: boolean | Habit$remindersArgs<ExtArgs>
    habitLogs?: boolean | Habit$habitLogsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      dataType: string
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reminders<T extends Habit$remindersArgs<ExtArgs> = {}>(args?: Subset<T, Habit$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    habitLogs<T extends Habit$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */ 
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'Int'>
    readonly userId: FieldRef<"Habit", 'Int'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly dataType: FieldRef<"Habit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
  }

  /**
   * Habit.reminders
   */
  export type Habit$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Habit.habitLogs
   */
  export type Habit$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogAvgAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type HabitLogSumAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: number | null
    habitId: number | null
    date: Date | null
    value: string | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: number | null
    habitId: number | null
    date: Date | null
    value: string | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    habitId: number
    date: number
    value: number
    _all: number
  }


  export type HabitLogAvgAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type HabitLogSumAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type HabitLogMinAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    value?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    value?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    value?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _avg?: HabitLogAvgAggregateInputType
    _sum?: HabitLogSumAggregateInputType
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: number
    habitId: number
    date: Date
    value: string
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    value?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    value?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    habitId?: boolean
    date?: boolean
    value?: boolean
  }

  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      habitId: number
      date: Date
      value: string
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitLog model
   */ 
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'Int'>
    readonly habitId: FieldRef<"HabitLog", 'Int'>
    readonly date: FieldRef<"HabitLog", 'DateTime'>
    readonly value: FieldRef<"HabitLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type ReminderSumAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: number | null
    habitId: number | null
    time: string | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: number | null
    habitId: number | null
    time: string | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    habitId: number
    time: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type ReminderSumAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    habitId?: true
    time?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    habitId?: true
    time?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    habitId?: true
    time?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: number
    habitId: number
    time: string
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    time?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    time?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    habitId?: boolean
    time?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      habitId: number
      time: string
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'Int'>
    readonly habitId: FieldRef<"Reminder", 'Int'>
    readonly time: FieldRef<"Reminder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    telegramId: 'telegramId',
    timezone: 'timezone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    meta: 'meta',
    content: 'content',
    quotee: 'quotee',
    userId: 'userId',
    deleted: 'deleted',
    bookId: 'bookId'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const UserFavoriteScalarFieldEnum: {
    userId: 'userId',
    quoteId: 'quoteId'
  };

  export type UserFavoriteScalarFieldEnum = (typeof UserFavoriteScalarFieldEnum)[keyof typeof UserFavoriteScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    source: 'source'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    text: 'text',
    userId: 'userId',
    created: 'created'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    dataType: 'dataType'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    value: 'value'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    time: 'time'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    telegramId?: BigIntFilter<"User"> | bigint | number
    timezone?: StringFilter<"User"> | string
    quotes?: QuoteListRelationFilter
    favorites?: UserFavoriteListRelationFilter
    messages?: MessageListRelationFilter
    habits?: HabitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    telegramId?: SortOrder
    timezone?: SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
    favorites?: UserFavoriteOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegramId?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    timezone?: StringFilter<"User"> | string
    quotes?: QuoteListRelationFilter
    favorites?: UserFavoriteListRelationFilter
    messages?: MessageListRelationFilter
    habits?: HabitListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    telegramId?: SortOrder
    timezone?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    telegramId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    timezone?: StringWithAggregatesFilter<"User"> | string
  }

  export type QuoteWhereInput = {
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    id?: IntFilter<"Quote"> | number
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    meta?: StringNullableFilter<"Quote"> | string | null
    content?: StringFilter<"Quote"> | string
    quotee?: StringNullableFilter<"Quote"> | string | null
    userId?: IntFilter<"Quote"> | number
    deleted?: BoolFilter<"Quote"> | boolean
    bookId?: IntNullableFilter<"Quote"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    book?: XOR<BookNullableRelationFilter, BookWhereInput> | null
    userFavorite?: UserFavoriteListRelationFilter
  }

  export type QuoteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrderInput | SortOrder
    content?: SortOrder
    quotee?: SortOrderInput | SortOrder
    userId?: SortOrder
    deleted?: SortOrder
    bookId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    book?: BookOrderByWithRelationInput
    userFavorite?: UserFavoriteOrderByRelationAggregateInput
  }

  export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    createdAt?: Date | string
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    meta?: StringNullableFilter<"Quote"> | string | null
    content?: StringFilter<"Quote"> | string
    quotee?: StringNullableFilter<"Quote"> | string | null
    userId?: IntFilter<"Quote"> | number
    deleted?: BoolFilter<"Quote"> | boolean
    bookId?: IntNullableFilter<"Quote"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    tags?: TagListRelationFilter
    book?: XOR<BookNullableRelationFilter, BookWhereInput> | null
    userFavorite?: UserFavoriteListRelationFilter
  }, "id" | "createdAt">

  export type QuoteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrderInput | SortOrder
    content?: SortOrder
    quotee?: SortOrderInput | SortOrder
    userId?: SortOrder
    deleted?: SortOrder
    bookId?: SortOrderInput | SortOrder
    _count?: QuoteCountOrderByAggregateInput
    _avg?: QuoteAvgOrderByAggregateInput
    _max?: QuoteMaxOrderByAggregateInput
    _min?: QuoteMinOrderByAggregateInput
    _sum?: QuoteSumOrderByAggregateInput
  }

  export type QuoteScalarWhereWithAggregatesInput = {
    AND?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    OR?: QuoteScalarWhereWithAggregatesInput[]
    NOT?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quote"> | Date | string
    meta?: StringNullableWithAggregatesFilter<"Quote"> | string | null
    content?: StringWithAggregatesFilter<"Quote"> | string
    quotee?: StringNullableWithAggregatesFilter<"Quote"> | string | null
    userId?: IntWithAggregatesFilter<"Quote"> | number
    deleted?: BoolWithAggregatesFilter<"Quote"> | boolean
    bookId?: IntNullableWithAggregatesFilter<"Quote"> | number | null
  }

  export type UserFavoriteWhereInput = {
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    userId?: IntFilter<"UserFavorite"> | number
    quoteId?: IntFilter<"UserFavorite"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    quote?: XOR<QuoteRelationFilter, QuoteWhereInput>
  }

  export type UserFavoriteOrderByWithRelationInput = {
    userId?: SortOrder
    quoteId?: SortOrder
    user?: UserOrderByWithRelationInput
    quote?: QuoteOrderByWithRelationInput
  }

  export type UserFavoriteWhereUniqueInput = Prisma.AtLeast<{
    userId_quoteId?: UserFavoriteUserIdQuoteIdCompoundUniqueInput
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    userId?: IntFilter<"UserFavorite"> | number
    quoteId?: IntFilter<"UserFavorite"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    quote?: XOR<QuoteRelationFilter, QuoteWhereInput>
  }, "userId_quoteId">

  export type UserFavoriteOrderByWithAggregationInput = {
    userId?: SortOrder
    quoteId?: SortOrder
    _count?: UserFavoriteCountOrderByAggregateInput
    _avg?: UserFavoriteAvgOrderByAggregateInput
    _max?: UserFavoriteMaxOrderByAggregateInput
    _min?: UserFavoriteMinOrderByAggregateInput
    _sum?: UserFavoriteSumOrderByAggregateInput
  }

  export type UserFavoriteScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserFavorite"> | number
    quoteId?: IntWithAggregatesFilter<"UserFavorite"> | number
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    source?: StringNullableFilter<"Book"> | string | null
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    quotes?: QuoteListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    source?: SortOrderInput | SortOrder
    author?: AuthorOrderByWithRelationInput
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    authorId?: IntFilter<"Book"> | number
    source?: StringNullableFilter<"Book"> | string | null
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    quotes?: QuoteListRelationFilter
  }, "id" | "title">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    source?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    authorId?: IntWithAggregatesFilter<"Book"> | number
    source?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    books?: BookListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    books?: BookListRelationFilter
  }, "id" | "name">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    name?: StringWithAggregatesFilter<"Author"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    quotes?: QuoteListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    quotes?: QuoteListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    userId?: IntFilter<"Message"> | number
    created?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    created?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    text?: StringFilter<"Message"> | string
    userId?: IntFilter<"Message"> | number
    created?: DateTimeFilter<"Message"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    created?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    text?: StringWithAggregatesFilter<"Message"> | string
    userId?: IntWithAggregatesFilter<"Message"> | number
    created?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: IntFilter<"Habit"> | number
    userId?: IntFilter<"Habit"> | number
    name?: StringFilter<"Habit"> | string
    dataType?: StringFilter<"Habit"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reminders?: ReminderListRelationFilter
    habitLogs?: HabitLogListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    user?: UserOrderByWithRelationInput
    reminders?: ReminderOrderByRelationAggregateInput
    habitLogs?: HabitLogOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    userId?: IntFilter<"Habit"> | number
    name?: StringFilter<"Habit"> | string
    dataType?: StringFilter<"Habit"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    reminders?: ReminderListRelationFilter
    habitLogs?: HabitLogListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habit"> | number
    userId?: IntWithAggregatesFilter<"Habit"> | number
    name?: StringWithAggregatesFilter<"Habit"> | string
    dataType?: StringWithAggregatesFilter<"Habit"> | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: IntFilter<"HabitLog"> | number
    habitId?: IntFilter<"HabitLog"> | number
    date?: DateTimeFilter<"HabitLog"> | Date | string
    value?: StringFilter<"HabitLog"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    habitId_date?: HabitLogHabitIdDateCompoundUniqueInput
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    habitId?: IntFilter<"HabitLog"> | number
    date?: DateTimeFilter<"HabitLog"> | Date | string
    value?: StringFilter<"HabitLog"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }, "id" | "habitId_date">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    value?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _avg?: HabitLogAvgOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
    _sum?: HabitLogSumOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HabitLog"> | number
    habitId?: IntWithAggregatesFilter<"HabitLog"> | number
    date?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    value?: StringWithAggregatesFilter<"HabitLog"> | string
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: IntFilter<"Reminder"> | number
    habitId?: IntFilter<"Reminder"> | number
    time?: StringFilter<"Reminder"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    time?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    habitId_time?: ReminderHabitIdTimeCompoundUniqueInput
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    habitId?: IntFilter<"Reminder"> | number
    time?: StringFilter<"Reminder"> | string
    habit?: XOR<HabitRelationFilter, HabitWhereInput>
  }, "id" | "habitId_time">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    time?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reminder"> | number
    habitId?: IntWithAggregatesFilter<"Reminder"> | number
    time?: StringWithAggregatesFilter<"Reminder"> | string
  }

  export type UserCreateInput = {
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateInput = {
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutQuotesInput
    tags?: TagCreateNestedManyWithoutQuotesInput
    book?: BookCreateNestedOneWithoutQuotesInput
    userFavorite?: UserFavoriteCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
    bookId?: number | null
    tags?: TagUncheckedCreateNestedManyWithoutQuotesInput
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuotesNestedInput
    tags?: TagUpdateManyWithoutQuotesNestedInput
    book?: BookUpdateOneWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagUncheckedUpdateManyWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteCreateManyInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
    bookId?: number | null
  }

  export type QuoteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserFavoriteCreateInput = {
    user: UserCreateNestedOneWithoutFavoritesInput
    quote: QuoteCreateNestedOneWithoutUserFavoriteInput
  }

  export type UserFavoriteUncheckedCreateInput = {
    userId: number
    quoteId: number
  }

  export type UserFavoriteUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    quote?: QuoteUpdateOneRequiredWithoutUserFavoriteNestedInput
  }

  export type UserFavoriteUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavoriteCreateManyInput = {
    userId: number
    quoteId: number
  }

  export type UserFavoriteUpdateManyMutationInput = {

  }

  export type UserFavoriteUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    quoteId?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateInput = {
    title: string
    source?: string | null
    author: AuthorCreateNestedOneWithoutBooksInput
    quotes?: QuoteCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    source?: string | null
    quotes?: QuoteUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
    quotes?: QuoteUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    authorId: number
    source?: string | null
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorCreateInput = {
    name: string
    books?: BookCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    name: string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    books?: BookUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    name: string
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    name: string
    quotes?: QuoteCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    text: string
    created: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    text: string
    userId: number
    created: Date | string
  }

  export type MessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    text: string
    userId: number
    created: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    name: string
    dataType: string
    user: UserCreateNestedOneWithoutHabitsInput
    reminders?: ReminderCreateNestedManyWithoutHabitInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    dataType: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutHabitInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    reminders?: ReminderUpdateManyWithoutHabitNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutHabitNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: number
    userId: number
    name: string
    dataType: string
  }

  export type HabitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogCreateInput = {
    date: Date | string
    value: string
    habit: HabitCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: number
    habitId: number
    date: Date | string
    value: string
  }

  export type HabitLogUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
    habit?: HabitUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogCreateManyInput = {
    id?: number
    habitId: number
    date: Date | string
    value: string
  }

  export type HabitLogUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderCreateInput = {
    time: string
    habit: HabitCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: number
    habitId: number
    time: string
  }

  export type ReminderUpdateInput = {
    time?: StringFieldUpdateOperationsInput | string
    habit?: HabitUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderCreateManyInput = {
    id?: number
    habitId: number
    time: string
  }

  export type ReminderUpdateManyMutationInput = {
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitId?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type QuoteListRelationFilter = {
    every?: QuoteWhereInput
    some?: QuoteWhereInput
    none?: QuoteWhereInput
  }

  export type UserFavoriteListRelationFilter = {
    every?: UserFavoriteWhereInput
    some?: UserFavoriteWhereInput
    none?: UserFavoriteWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type QuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramId?: SortOrder
    timezone?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramId?: SortOrder
    timezone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telegramId?: SortOrder
    timezone?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type BookNullableRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    content?: SortOrder
    quotee?: SortOrder
    userId?: SortOrder
    deleted?: SortOrder
    bookId?: SortOrder
  }

  export type QuoteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type QuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    content?: SortOrder
    quotee?: SortOrder
    userId?: SortOrder
    deleted?: SortOrder
    bookId?: SortOrder
  }

  export type QuoteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    meta?: SortOrder
    content?: SortOrder
    quotee?: SortOrder
    userId?: SortOrder
    deleted?: SortOrder
    bookId?: SortOrder
  }

  export type QuoteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type QuoteRelationFilter = {
    is?: QuoteWhereInput
    isNot?: QuoteWhereInput
  }

  export type UserFavoriteUserIdQuoteIdCompoundUniqueInput = {
    userId: number
    quoteId: number
  }

  export type UserFavoriteCountOrderByAggregateInput = {
    userId?: SortOrder
    quoteId?: SortOrder
  }

  export type UserFavoriteAvgOrderByAggregateInput = {
    userId?: SortOrder
    quoteId?: SortOrder
  }

  export type UserFavoriteMaxOrderByAggregateInput = {
    userId?: SortOrder
    quoteId?: SortOrder
  }

  export type UserFavoriteMinOrderByAggregateInput = {
    userId?: SortOrder
    quoteId?: SortOrder
  }

  export type UserFavoriteSumOrderByAggregateInput = {
    userId?: SortOrder
    quoteId?: SortOrder
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    created?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    created?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    created?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HabitRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitLogHabitIdDateCompoundUniqueInput = {
    habitId: number
    date: Date | string
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type HabitLogAvgOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type HabitLogSumOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type ReminderHabitIdTimeCompoundUniqueInput = {
    habitId: number
    time: string
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    time?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    time?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    time?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type QuoteCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput> | QuoteCreateWithoutUserInput[] | QuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutUserInput | QuoteCreateOrConnectWithoutUserInput[]
    createMany?: QuoteCreateManyUserInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput> | QuoteCreateWithoutUserInput[] | QuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutUserInput | QuoteCreateOrConnectWithoutUserInput[]
    createMany?: QuoteCreateManyUserInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type QuoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput> | QuoteCreateWithoutUserInput[] | QuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutUserInput | QuoteCreateOrConnectWithoutUserInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutUserInput | QuoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteCreateManyUserInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutUserInput | QuoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutUserInput | QuoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type UserFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput> | QuoteCreateWithoutUserInput[] | QuoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutUserInput | QuoteCreateOrConnectWithoutUserInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutUserInput | QuoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuoteCreateManyUserInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutUserInput | QuoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutUserInput | QuoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuotesInput = {
    create?: XOR<UserCreateWithoutQuotesInput, UserUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotesInput
    connect?: UserWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutQuotesInput = {
    create?: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput> | TagCreateWithoutQuotesInput[] | TagUncheckedCreateWithoutQuotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutQuotesInput | TagCreateOrConnectWithoutQuotesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BookCreateNestedOneWithoutQuotesInput = {
    create?: XOR<BookCreateWithoutQuotesInput, BookUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: BookCreateOrConnectWithoutQuotesInput
    connect?: BookWhereUniqueInput
  }

  export type UserFavoriteCreateNestedManyWithoutQuoteInput = {
    create?: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput> | UserFavoriteCreateWithoutQuoteInput[] | UserFavoriteUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutQuoteInput | UserFavoriteCreateOrConnectWithoutQuoteInput[]
    createMany?: UserFavoriteCreateManyQuoteInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutQuotesInput = {
    create?: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput> | TagCreateWithoutQuotesInput[] | TagUncheckedCreateWithoutQuotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutQuotesInput | TagCreateOrConnectWithoutQuotesInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutQuoteInput = {
    create?: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput> | UserFavoriteCreateWithoutQuoteInput[] | UserFavoriteUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutQuoteInput | UserFavoriteCreateOrConnectWithoutQuoteInput[]
    createMany?: UserFavoriteCreateManyQuoteInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutQuotesNestedInput = {
    create?: XOR<UserCreateWithoutQuotesInput, UserUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuotesInput
    upsert?: UserUpsertWithoutQuotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuotesInput, UserUpdateWithoutQuotesInput>, UserUncheckedUpdateWithoutQuotesInput>
  }

  export type TagUpdateManyWithoutQuotesNestedInput = {
    create?: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput> | TagCreateWithoutQuotesInput[] | TagUncheckedCreateWithoutQuotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutQuotesInput | TagCreateOrConnectWithoutQuotesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutQuotesInput | TagUpsertWithWhereUniqueWithoutQuotesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutQuotesInput | TagUpdateWithWhereUniqueWithoutQuotesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutQuotesInput | TagUpdateManyWithWhereWithoutQuotesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type BookUpdateOneWithoutQuotesNestedInput = {
    create?: XOR<BookCreateWithoutQuotesInput, BookUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: BookCreateOrConnectWithoutQuotesInput
    upsert?: BookUpsertWithoutQuotesInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutQuotesInput, BookUpdateWithoutQuotesInput>, BookUncheckedUpdateWithoutQuotesInput>
  }

  export type UserFavoriteUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput> | UserFavoriteCreateWithoutQuoteInput[] | UserFavoriteUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutQuoteInput | UserFavoriteCreateOrConnectWithoutQuoteInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutQuoteInput | UserFavoriteUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: UserFavoriteCreateManyQuoteInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutQuoteInput | UserFavoriteUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutQuoteInput | UserFavoriteUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TagUncheckedUpdateManyWithoutQuotesNestedInput = {
    create?: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput> | TagCreateWithoutQuotesInput[] | TagUncheckedCreateWithoutQuotesInput[]
    connectOrCreate?: TagCreateOrConnectWithoutQuotesInput | TagCreateOrConnectWithoutQuotesInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutQuotesInput | TagUpsertWithWhereUniqueWithoutQuotesInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutQuotesInput | TagUpdateWithWhereUniqueWithoutQuotesInput[]
    updateMany?: TagUpdateManyWithWhereWithoutQuotesInput | TagUpdateManyWithWhereWithoutQuotesInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutQuoteNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput> | UserFavoriteCreateWithoutQuoteInput[] | UserFavoriteUncheckedCreateWithoutQuoteInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutQuoteInput | UserFavoriteCreateOrConnectWithoutQuoteInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutQuoteInput | UserFavoriteUpsertWithWhereUniqueWithoutQuoteInput[]
    createMany?: UserFavoriteCreateManyQuoteInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutQuoteInput | UserFavoriteUpdateWithWhereUniqueWithoutQuoteInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutQuoteInput | UserFavoriteUpdateManyWithWhereWithoutQuoteInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type QuoteCreateNestedOneWithoutUserFavoriteInput = {
    create?: XOR<QuoteCreateWithoutUserFavoriteInput, QuoteUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutUserFavoriteInput
    connect?: QuoteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type QuoteUpdateOneRequiredWithoutUserFavoriteNestedInput = {
    create?: XOR<QuoteCreateWithoutUserFavoriteInput, QuoteUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: QuoteCreateOrConnectWithoutUserFavoriteInput
    upsert?: QuoteUpsertWithoutUserFavoriteInput
    connect?: QuoteWhereUniqueInput
    update?: XOR<XOR<QuoteUpdateToOneWithWhereWithoutUserFavoriteInput, QuoteUpdateWithoutUserFavoriteInput>, QuoteUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type QuoteCreateNestedManyWithoutBookInput = {
    create?: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput> | QuoteCreateWithoutBookInput[] | QuoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutBookInput | QuoteCreateOrConnectWithoutBookInput[]
    createMany?: QuoteCreateManyBookInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput> | QuoteCreateWithoutBookInput[] | QuoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutBookInput | QuoteCreateOrConnectWithoutBookInput[]
    createMany?: QuoteCreateManyBookInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type QuoteUpdateManyWithoutBookNestedInput = {
    create?: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput> | QuoteCreateWithoutBookInput[] | QuoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutBookInput | QuoteCreateOrConnectWithoutBookInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutBookInput | QuoteUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: QuoteCreateManyBookInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutBookInput | QuoteUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutBookInput | QuoteUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput> | QuoteCreateWithoutBookInput[] | QuoteUncheckedCreateWithoutBookInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutBookInput | QuoteCreateOrConnectWithoutBookInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutBookInput | QuoteUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: QuoteCreateManyBookInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutBookInput | QuoteUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutBookInput | QuoteUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type QuoteCreateNestedManyWithoutTagsInput = {
    create?: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput> | QuoteCreateWithoutTagsInput[] | QuoteUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTagsInput | QuoteCreateOrConnectWithoutTagsInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput> | QuoteCreateWithoutTagsInput[] | QuoteUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTagsInput | QuoteCreateOrConnectWithoutTagsInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUpdateManyWithoutTagsNestedInput = {
    create?: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput> | QuoteCreateWithoutTagsInput[] | QuoteUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTagsInput | QuoteCreateOrConnectWithoutTagsInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutTagsInput | QuoteUpsertWithWhereUniqueWithoutTagsInput[]
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutTagsInput | QuoteUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutTagsInput | QuoteUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput> | QuoteCreateWithoutTagsInput[] | QuoteUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutTagsInput | QuoteCreateOrConnectWithoutTagsInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutTagsInput | QuoteUpsertWithWhereUniqueWithoutTagsInput[]
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutTagsInput | QuoteUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutTagsInput | QuoteUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type ReminderCreateNestedManyWithoutHabitInput = {
    create?: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput> | ReminderCreateWithoutHabitInput[] | ReminderUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutHabitInput | ReminderCreateOrConnectWithoutHabitInput[]
    createMany?: ReminderCreateManyHabitInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput> | ReminderCreateWithoutHabitInput[] | ReminderUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutHabitInput | ReminderCreateOrConnectWithoutHabitInput[]
    createMany?: ReminderCreateManyHabitInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type ReminderUpdateManyWithoutHabitNestedInput = {
    create?: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput> | ReminderCreateWithoutHabitInput[] | ReminderUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutHabitInput | ReminderCreateOrConnectWithoutHabitInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutHabitInput | ReminderUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: ReminderCreateManyHabitInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutHabitInput | ReminderUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutHabitInput | ReminderUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput> | ReminderCreateWithoutHabitInput[] | ReminderUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutHabitInput | ReminderCreateOrConnectWithoutHabitInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutHabitInput | ReminderUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: ReminderCreateManyHabitInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutHabitInput | ReminderUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutHabitInput | ReminderUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutHabitLogsInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutHabitLogsInput
    upsert?: HabitUpsertWithoutHabitLogsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutHabitLogsInput, HabitUpdateWithoutHabitLogsInput>, HabitUncheckedUpdateWithoutHabitLogsInput>
  }

  export type HabitCreateNestedOneWithoutRemindersInput = {
    create?: XOR<HabitCreateWithoutRemindersInput, HabitUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRemindersInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<HabitCreateWithoutRemindersInput, HabitUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRemindersInput
    upsert?: HabitUpsertWithoutRemindersInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutRemindersInput, HabitUpdateWithoutRemindersInput>, HabitUncheckedUpdateWithoutRemindersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuoteCreateWithoutUserInput = {
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    tags?: TagCreateNestedManyWithoutQuotesInput
    book?: BookCreateNestedOneWithoutQuotesInput
    userFavorite?: UserFavoriteCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    bookId?: number | null
    tags?: TagUncheckedCreateNestedManyWithoutQuotesInput
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutUserInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput>
  }

  export type QuoteCreateManyUserInputEnvelope = {
    data: QuoteCreateManyUserInput | QuoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFavoriteCreateWithoutUserInput = {
    quote: QuoteCreateNestedOneWithoutUserFavoriteInput
  }

  export type UserFavoriteUncheckedCreateWithoutUserInput = {
    quoteId: number
  }

  export type UserFavoriteCreateOrConnectWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteCreateManyUserInputEnvelope = {
    data: UserFavoriteCreateManyUserInput | UserFavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    text: string
    created: Date | string
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number
    text: string
    created: Date | string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutUserInput = {
    name: string
    dataType: string
    reminders?: ReminderCreateNestedManyWithoutHabitInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    dataType: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutHabitInput
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutUserInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutUserInput, QuoteUncheckedUpdateWithoutUserInput>
    create: XOR<QuoteCreateWithoutUserInput, QuoteUncheckedCreateWithoutUserInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutUserInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutUserInput, QuoteUncheckedUpdateWithoutUserInput>
  }

  export type QuoteUpdateManyWithWhereWithoutUserInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutUserInput>
  }

  export type QuoteScalarWhereInput = {
    AND?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    OR?: QuoteScalarWhereInput[]
    NOT?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    id?: IntFilter<"Quote"> | number
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    meta?: StringNullableFilter<"Quote"> | string | null
    content?: StringFilter<"Quote"> | string
    quotee?: StringNullableFilter<"Quote"> | string | null
    userId?: IntFilter<"Quote"> | number
    deleted?: BoolFilter<"Quote"> | boolean
    bookId?: IntNullableFilter<"Quote"> | number | null
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavoriteScalarWhereInput = {
    AND?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    OR?: UserFavoriteScalarWhereInput[]
    NOT?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    userId?: IntFilter<"UserFavorite"> | number
    quoteId?: IntFilter<"UserFavorite"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    text?: StringFilter<"Message"> | string
    userId?: IntFilter<"Message"> | number
    created?: DateTimeFilter<"Message"> | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: IntFilter<"Habit"> | number
    userId?: IntFilter<"Habit"> | number
    name?: StringFilter<"Habit"> | string
    dataType?: StringFilter<"Habit"> | string
  }

  export type UserCreateWithoutQuotesInput = {
    name: string
    telegramId: bigint | number
    timezone?: string
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuotesInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuotesInput, UserUncheckedCreateWithoutQuotesInput>
  }

  export type TagCreateWithoutQuotesInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutQuotesInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutQuotesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput>
  }

  export type BookCreateWithoutQuotesInput = {
    title: string
    source?: string | null
    author: AuthorCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutQuotesInput = {
    id?: number
    title: string
    authorId: number
    source?: string | null
  }

  export type BookCreateOrConnectWithoutQuotesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutQuotesInput, BookUncheckedCreateWithoutQuotesInput>
  }

  export type UserFavoriteCreateWithoutQuoteInput = {
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type UserFavoriteUncheckedCreateWithoutQuoteInput = {
    userId: number
  }

  export type UserFavoriteCreateOrConnectWithoutQuoteInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput>
  }

  export type UserFavoriteCreateManyQuoteInputEnvelope = {
    data: UserFavoriteCreateManyQuoteInput | UserFavoriteCreateManyQuoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuotesInput = {
    update: XOR<UserUpdateWithoutQuotesInput, UserUncheckedUpdateWithoutQuotesInput>
    create: XOR<UserCreateWithoutQuotesInput, UserUncheckedCreateWithoutQuotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuotesInput, UserUncheckedUpdateWithoutQuotesInput>
  }

  export type UserUpdateWithoutQuotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutQuotesInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutQuotesInput, TagUncheckedUpdateWithoutQuotesInput>
    create: XOR<TagCreateWithoutQuotesInput, TagUncheckedCreateWithoutQuotesInput>
  }

  export type TagUpdateWithWhereUniqueWithoutQuotesInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutQuotesInput, TagUncheckedUpdateWithoutQuotesInput>
  }

  export type TagUpdateManyWithWhereWithoutQuotesInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutQuotesInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
  }

  export type BookUpsertWithoutQuotesInput = {
    update: XOR<BookUpdateWithoutQuotesInput, BookUncheckedUpdateWithoutQuotesInput>
    create: XOR<BookCreateWithoutQuotesInput, BookUncheckedCreateWithoutQuotesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutQuotesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutQuotesInput, BookUncheckedUpdateWithoutQuotesInput>
  }

  export type BookUpdateWithoutQuotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutQuotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutQuoteInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutQuoteInput, UserFavoriteUncheckedUpdateWithoutQuoteInput>
    create: XOR<UserFavoriteCreateWithoutQuoteInput, UserFavoriteUncheckedCreateWithoutQuoteInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutQuoteInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutQuoteInput, UserFavoriteUncheckedUpdateWithoutQuoteInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutQuoteInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutQuoteInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type QuoteCreateWithoutUserFavoriteInput = {
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutQuotesInput
    tags?: TagCreateNestedManyWithoutQuotesInput
    book?: BookCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateWithoutUserFavoriteInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
    bookId?: number | null
    tags?: TagUncheckedCreateNestedManyWithoutQuotesInput
  }

  export type QuoteCreateOrConnectWithoutUserFavoriteInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutUserFavoriteInput, QuoteUncheckedCreateWithoutUserFavoriteInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuoteUpsertWithoutUserFavoriteInput = {
    update: XOR<QuoteUpdateWithoutUserFavoriteInput, QuoteUncheckedUpdateWithoutUserFavoriteInput>
    create: XOR<QuoteCreateWithoutUserFavoriteInput, QuoteUncheckedCreateWithoutUserFavoriteInput>
    where?: QuoteWhereInput
  }

  export type QuoteUpdateToOneWithWhereWithoutUserFavoriteInput = {
    where?: QuoteWhereInput
    data: XOR<QuoteUpdateWithoutUserFavoriteInput, QuoteUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type QuoteUpdateWithoutUserFavoriteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuotesNestedInput
    tags?: TagUpdateManyWithoutQuotesNestedInput
    book?: BookUpdateOneWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateWithoutUserFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagUncheckedUpdateManyWithoutQuotesNestedInput
  }

  export type AuthorCreateWithoutBooksInput = {
    name: string
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type QuoteCreateWithoutBookInput = {
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutQuotesInput
    tags?: TagCreateNestedManyWithoutQuotesInput
    userFavorite?: UserFavoriteCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutBookInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
    tags?: TagUncheckedCreateNestedManyWithoutQuotesInput
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutBookInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput>
  }

  export type QuoteCreateManyBookInputEnvelope = {
    data: QuoteCreateManyBookInput | QuoteCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteUpsertWithWhereUniqueWithoutBookInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutBookInput, QuoteUncheckedUpdateWithoutBookInput>
    create: XOR<QuoteCreateWithoutBookInput, QuoteUncheckedCreateWithoutBookInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutBookInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutBookInput, QuoteUncheckedUpdateWithoutBookInput>
  }

  export type QuoteUpdateManyWithWhereWithoutBookInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCreateWithoutAuthorInput = {
    title: string
    source?: string | null
    quotes?: QuoteCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    source?: string | null
    quotes?: QuoteUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    authorId?: IntFilter<"Book"> | number
    source?: StringNullableFilter<"Book"> | string | null
  }

  export type QuoteCreateWithoutTagsInput = {
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutQuotesInput
    book?: BookCreateNestedOneWithoutQuotesInput
    userFavorite?: UserFavoriteCreateNestedManyWithoutQuoteInput
  }

  export type QuoteUncheckedCreateWithoutTagsInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
    bookId?: number | null
    userFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutQuoteInput
  }

  export type QuoteCreateOrConnectWithoutTagsInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput>
  }

  export type QuoteUpsertWithWhereUniqueWithoutTagsInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutTagsInput, QuoteUncheckedUpdateWithoutTagsInput>
    create: XOR<QuoteCreateWithoutTagsInput, QuoteUncheckedCreateWithoutTagsInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutTagsInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutTagsInput, QuoteUncheckedUpdateWithoutTagsInput>
  }

  export type QuoteUpdateManyWithWhereWithoutTagsInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutMessagesInput = {
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHabitsInput = {
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: number
    name: string
    telegramId: bigint | number
    timezone?: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutUserInput
    favorites?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type ReminderCreateWithoutHabitInput = {
    time: string
  }

  export type ReminderUncheckedCreateWithoutHabitInput = {
    id?: number
    time: string
  }

  export type ReminderCreateOrConnectWithoutHabitInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput>
  }

  export type ReminderCreateManyHabitInputEnvelope = {
    data: ReminderCreateManyHabitInput | ReminderCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type HabitLogCreateWithoutHabitInput = {
    date: Date | string
    value: string
  }

  export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: number
    date: Date | string
    value: string
  }

  export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogCreateManyHabitInputEnvelope = {
    data: HabitLogCreateManyHabitInput | HabitLogCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    telegramId?: BigIntFieldUpdateOperationsInput | bigint | number
    timezone?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutUserNestedInput
    favorites?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReminderUpsertWithWhereUniqueWithoutHabitInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutHabitInput, ReminderUncheckedUpdateWithoutHabitInput>
    create: XOR<ReminderCreateWithoutHabitInput, ReminderUncheckedCreateWithoutHabitInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutHabitInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutHabitInput, ReminderUncheckedUpdateWithoutHabitInput>
  }

  export type ReminderUpdateManyWithWhereWithoutHabitInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutHabitInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: IntFilter<"Reminder"> | number
    habitId?: IntFilter<"Reminder"> | number
    time?: StringFilter<"Reminder"> | string
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: IntFilter<"HabitLog"> | number
    habitId?: IntFilter<"HabitLog"> | number
    date?: DateTimeFilter<"HabitLog"> | Date | string
    value?: StringFilter<"HabitLog"> | string
  }

  export type HabitCreateWithoutHabitLogsInput = {
    name: string
    dataType: string
    user: UserCreateNestedOneWithoutHabitsInput
    reminders?: ReminderCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutHabitLogsInput = {
    id?: number
    userId: number
    name: string
    dataType: string
    reminders?: ReminderUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutHabitLogsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
  }

  export type HabitUpsertWithoutHabitLogsInput = {
    update: XOR<HabitUpdateWithoutHabitLogsInput, HabitUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<HabitCreateWithoutHabitLogsInput, HabitUncheckedCreateWithoutHabitLogsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutHabitLogsInput, HabitUncheckedUpdateWithoutHabitLogsInput>
  }

  export type HabitUpdateWithoutHabitLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    reminders?: ReminderUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutHabitLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateWithoutRemindersInput = {
    name: string
    dataType: string
    user: UserCreateNestedOneWithoutHabitsInput
    habitLogs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutRemindersInput = {
    id?: number
    userId: number
    name: string
    dataType: string
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutRemindersInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutRemindersInput, HabitUncheckedCreateWithoutRemindersInput>
  }

  export type HabitUpsertWithoutRemindersInput = {
    update: XOR<HabitUpdateWithoutRemindersInput, HabitUncheckedUpdateWithoutRemindersInput>
    create: XOR<HabitCreateWithoutRemindersInput, HabitUncheckedCreateWithoutRemindersInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutRemindersInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutRemindersInput, HabitUncheckedUpdateWithoutRemindersInput>
  }

  export type HabitUpdateWithoutRemindersInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type QuoteCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    deleted?: boolean
    bookId?: number | null
  }

  export type UserFavoriteCreateManyUserInput = {
    quoteId: number
  }

  export type MessageCreateManyUserInput = {
    id?: number
    text: string
    created: Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: number
    name: string
    dataType: string
  }

  export type QuoteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tags?: TagUpdateManyWithoutQuotesNestedInput
    book?: BookUpdateOneWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagUncheckedUpdateManyWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserFavoriteUpdateWithoutUserInput = {
    quote?: QuoteUpdateOneRequiredWithoutUserFavoriteNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutUserInput = {
    quoteId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserInput = {
    quoteId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutUserInput = {
    text?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUpdateManyWithoutHabitNestedInput
    habitLogs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    reminders?: ReminderUncheckedUpdateManyWithoutHabitNestedInput
    habitLogs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavoriteCreateManyQuoteInput = {
    userId: number
  }

  export type TagUpdateWithoutQuotesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutQuotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutQuotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavoriteUpdateWithoutQuoteInput = {
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutQuoteInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavoriteUncheckedUpdateManyWithoutQuoteInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QuoteCreateManyBookInput = {
    id?: number
    createdAt?: Date | string
    meta?: string | null
    content: string
    quotee?: string | null
    userId: number
    deleted?: boolean
  }

  export type QuoteUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuotesNestedInput
    tags?: TagUpdateManyWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tags?: TagUncheckedUpdateManyWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookCreateManyAuthorInput = {
    id?: number
    title: string
    source?: string | null
  }

  export type BookUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    quotes?: QuoteUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteUpdateWithoutTagsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuotesNestedInput
    book?: BookUpdateOneWithoutQuotesNestedInput
    userFavorite?: UserFavoriteUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
    userFavorite?: UserFavoriteUncheckedUpdateManyWithoutQuoteNestedInput
  }

  export type QuoteUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    quotee?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    deleted?: BoolFieldUpdateOperationsInput | boolean
    bookId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReminderCreateManyHabitInput = {
    id?: number
    time: string
  }

  export type HabitLogCreateManyHabitInput = {
    id?: number
    date: Date | string
    value: string
  }

  export type ReminderUpdateWithoutHabitInput = {
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogUpdateWithoutHabitInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuoteCountOutputTypeDefaultArgs instead
     */
    export type QuoteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuoteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookCountOutputTypeDefaultArgs instead
     */
    export type BookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorCountOutputTypeDefaultArgs instead
     */
    export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitCountOutputTypeDefaultArgs instead
     */
    export type HabitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuoteDefaultArgs instead
     */
    export type QuoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserFavoriteDefaultArgs instead
     */
    export type UserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserFavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookDefaultArgs instead
     */
    export type BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorDefaultArgs instead
     */
    export type AuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitDefaultArgs instead
     */
    export type HabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitLogDefaultArgs instead
     */
    export type HabitLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}