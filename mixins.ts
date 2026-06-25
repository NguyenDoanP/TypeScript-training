type BaseConstructor = new (...args: any[]) => {};

function TimestampedMixin<TBase extends BaseConstructor>(Base: TBase) {
  return class extends Base {
    createdOn = new Date();
  };
}

function ActivatableMixin<TBase extends BaseConstructor>(Base: TBase) {
  return class extends Base {
    active = true;

    activate() {
      this.active = true;
    }

    deactivate() {
      this.active = false;
    }
  };
}

class Member {
  name = 'Nguyen';
}

const MixedMember = ActivatableMixin(TimestampedMixin(Member));

const member = new MixedMember();

console.log(member.name);
console.log(member.createdOn);
console.log(member.active);

member.deactivate();

console.log(member.active);
