// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

/* tslint:disable:ordered-imports variable-name */
import * as lumi from "@lumi/lumi";

export class Queue extends lumi.NamedResource implements QueueArgs {
    public readonly fifoQueue?: boolean;
    public readonly queueName?: string;
    public contentBasedDeduplication?: boolean;
    public delaySeconds?: number;
    public maximumMessageSize?: number;
    public messageRetentionPeriod?: number;
    public receiveMessageWaitTimeSeconds?: number;
    public redrivePolicy?: RedrivePolicy;
    public visibilityTimeout?: number;

    constructor(name: string, args?: QueueArgs) {
        super(name);
        if (args !== undefined) {
            this.fifoQueue = args.fifoQueue;
            this.queueName = args.queueName;
            this.contentBasedDeduplication = args.contentBasedDeduplication;
            this.delaySeconds = args.delaySeconds;
            this.maximumMessageSize = args.maximumMessageSize;
            this.messageRetentionPeriod = args.messageRetentionPeriod;
            this.receiveMessageWaitTimeSeconds = args.receiveMessageWaitTimeSeconds;
            this.redrivePolicy = args.redrivePolicy;
            this.visibilityTimeout = args.visibilityTimeout;
        }
    }

    public static get(id: lumi.ID): Queue {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Queue[] {
        return <any>undefined; // functionality provided by the runtime
    }
}

export interface QueueArgs {
    readonly fifoQueue?: boolean;
    readonly queueName?: string;
    contentBasedDeduplication?: boolean;
    delaySeconds?: number;
    maximumMessageSize?: number;
    messageRetentionPeriod?: number;
    receiveMessageWaitTimeSeconds?: number;
    redrivePolicy?: RedrivePolicy;
    visibilityTimeout?: number;
}

export interface RedrivePolicy {
    deadLetterTarget: Queue;
    maxReceiveCount: number;
}


