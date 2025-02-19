/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Phaser.Physics.Matter.Matter
 */

var Matter = require('./lib/core/Matter');

Matter.Body = require('./lib/body/Body');
Matter.Composite = require('./lib/body/Composite');
Matter.World = require('./lib/body/World');

Matter.Collision = require('./lib/collision/Collision');
Matter.Detector = require('./lib/collision/Detector');
Matter.Pairs = require('./lib/collision/Pairs');
Matter.Pair = require('./lib/collision/Pair');
Matter.Query = require('./lib/collision/Query');
Matter.Resolver = require('./lib/collision/Resolver');

Matter.Constraint = require('./lib/constraint/Constraint');

Matter.Common = require('./lib/core/Common');
Matter.Engine = require('./lib/core/Engine');
Matter.Events = require('./lib/core/Events');
Matter.Sleeping = require('./lib/core/Sleeping');
Matter.Plugin = require('./lib/core/Plugin');

Matter.Bodies = require('./lib/factory/Bodies');
Matter.Composites = require('./lib/factory/Composites');

Matter.Axes = require('./lib/geometry/Axes');
Matter.Bounds = require('./lib/geometry/Bounds');
Matter.Svg = require('./lib/geometry/Svg');
Matter.Vector = require('./lib/geometry/Vector');
Matter.Vertices = require('./lib/geometry/Vertices');

// aliases

Matter.World.add = Matter.Composite.add;
Matter.World.remove = Matter.Composite.remove;
Matter.World.addComposite = Matter.Composite.addComposite;
Matter.World.addBody = Matter.Composite.addBody;
Matter.World.addConstraint = Matter.Composite.addConstraint;
Matter.World.clear = Matter.Composite.clear;

module.exports = Matter;
