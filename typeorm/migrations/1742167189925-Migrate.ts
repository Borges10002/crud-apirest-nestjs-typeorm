import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrate1742167189925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'name', // Keep this column
            type: 'varchar',
            length: '63',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '127',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '127',
          },
          {
            name: 'birthAt',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'int',
            default: '1',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP()',
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
