// src/core/domain/mappers/user-created.mapper.ts

import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from 'src/core/domain/entities/users/user.entity';
import { UserCreatedDto } from 'src/shared/dtos/users/user-created.dto';

export class UserCreatedMapper implements Mapper<UserCreatedDto, UserEntity> {
  public mapFrom(data: UserCreatedDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;

    return user;
  }

  public mapTo(data: UserEntity): UserCreatedDto {
    const user = new UserCreatedDto();

    user.id = data.id;
    user.name = data.name;

    return user;
  }
}
